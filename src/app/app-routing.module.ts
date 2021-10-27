import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormprojectComponent } from './components/formproject/formproject.component';
import { ProjectlistComponent } from './components/projectlist/projectlist.component';
const routes:Routes = [
  {path:'', component: ProjectlistComponent},
  {path:'projects', component:FormprojectComponent},
  {path:'projects/edit/:id', component:FormprojectComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
