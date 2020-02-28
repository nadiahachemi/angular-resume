import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BioComponent } from './bio/bio.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { OthersComponent } from './others/others.component';



const routes: Routes = [
  {path:"", component: AppComponent},
  {path: "welcome", component: WelcomeComponent},
  {path: "bio", component: BioComponent},
  {path: "education", component: EducationComponent},
  {path: "work", component: WorkComponent},
  {path: "project", component: ProjectsComponent},
  {path: "contact", component: ContactComponent},
  {path: "others", component: OthersComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }