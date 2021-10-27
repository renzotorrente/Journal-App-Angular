//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';


//Components
import { AppComponent } from './app.component';
import { FormprojectComponent } from './components/formproject/formproject.component';
import { ProjectlistComponent } from './components/projectlist/projectlist.component';
import { NavComponent } from './components/share/nav/nav.component';
//Services
import {ProjectsService} from './services/getprojects.service';

@NgModule({
  declarations: [
    AppComponent,
    FormprojectComponent,
    ProjectlistComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
