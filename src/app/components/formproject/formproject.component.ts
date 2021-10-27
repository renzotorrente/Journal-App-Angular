import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectsService } from '../../services/getprojects.service';
import { UUID } from 'angular2-uuid';
import { project } from '../../models/projecType';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-formproject',
  templateUrl: './formproject.component.html',
  styleUrls: ['./formproject.component.css']
})
export class FormprojectComponent implements OnInit {
   public updatemode:boolean | undefined;
   public formupdated: any;
   public id!: string;
   public form:any;
  constructor( public serviceproject:ProjectsService, public routeactivate:ActivatedRoute, public router:Router) {
    this.routeactivate.params.subscribe(params=>{
      if(params.id === undefined){
        this.updatemode = false
      }else{
        this.updatemode = true;
        this.id = params.id;
      }
    });
    this.form={
      projectname: "",
      descript: "",
      status: "",
      projectmanager:"", 
      asignedto: ""
    }
   }
    
  addsubmit(form:NgForm){
    
  if(form.invalid){
      Object.values(form.controls).forEach(control =>{
        control.markAsTouched();
    })
    return;
  }else if(this.updatemode === true){
    var {projectname,descript, projectmanager, status,asignedto} = form.value;
    this.serviceproject.UpdateProject({projectname, descript, projectmanager, status, asignedto, id:this.form.id, date: new Date()});
    this.updatemode = false;
    this.router.navigateByUrl('projects');
  }else{
    let {projectname,descript, projectmanager, status,asignedto} = form.value;
    this.serviceproject.addProjects({projectname,descript,projectmanager,asignedto,status,date:new Date(),id: UUID.UUID()})
    
  }
  form.resetForm();
  return false;
}
  ngOnInit(): void {
    if(this.updatemode === true){
     this.formupdated = this.serviceproject.getProjectById(this.id);
     if(this.formupdated === false){
      this.router.navigateByUrl('/');
     }else{
       this.formupdated = this.formupdated[0];
       this.form={
        projectname: this.formupdated?.projectname,
        descript: this.formupdated.descript,
        status: this.formupdated.status,
        projectmanager: this.formupdated.projectmanager,
        asignedto: this.formupdated.asignedto,
        id:this.formupdated.id,
        date:this.formupdated.date
      }
     }
    }
  }

}
