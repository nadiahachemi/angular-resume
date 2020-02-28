import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BioComponent } from './bio/bio.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { OthersComponent } from './others/others.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BioComponent,
    EducationComponent,
    WorkComponent,
    OthersComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [ 
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
