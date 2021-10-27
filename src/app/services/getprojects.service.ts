import { Injectable } from '@angular/core';
import { project } from '../models/projecType';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: project[]

  constructor() {
    this.projects = [];
  }
  getProject() {
    if(localStorage.getItem('projects') !== null) {
      this.projects = JSON.parse(localStorage.getItem('projects') as string)
    } else {
      this.projects = [];
    }
    return this.projects;
  }
  addProjects(project: project) {
    this.projects.push(project);
    let projects = [];
    if (localStorage.getItem('projects') === null) {
      projects =[];
      projects.push(project);
      localStorage.setItem('projects', JSON.stringify(projects));
    } else {
      projects = JSON.parse(localStorage.getItem("projects") as string);
      projects.push(project);
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  }
  getProjectById(id:string){
    let projects = JSON.parse(localStorage.getItem("projects") as string);
    let filter = projects.filter((elem:project) => elem.id === id);
    if(filter !== null){
      return filter;
    }else{
      return false;
    }

 }
  deleteproject(project: project) {
   let projects = JSON.parse(localStorage.getItem("projects") as string);
    let filter = projects.filter((elem:project) => project.id !== elem.id);
    localStorage.setItem('projects', JSON.stringify(filter));
    
  }

  UpdateProject(project:project){
    let projects = JSON.parse(localStorage.getItem("projects") as string);
    let cleanprojects = projects.filter((elem:project) => project.id !== elem.id);
     cleanprojects.push(project);
    localStorage.setItem('projects', JSON.stringify(cleanprojects));
  }
}
