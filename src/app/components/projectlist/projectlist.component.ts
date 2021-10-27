import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/models/projecType';
import {ProjectsService} from '../../services/getprojects.service';
@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {
   public projects : project []
  constructor(public projectservice:ProjectsService) {
   this.projects = [];
   }

  ngOnInit(): void {
    this.projects = this.projectservice.getProject();
  }
 deleteproject(project:project){
   this.projectservice.deleteproject(project);
   this.projects = this.projectservice.getProject();
 }
}
