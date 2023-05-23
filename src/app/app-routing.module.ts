import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentInfoComponent } from './student-info/student-info.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'', redirectTo:'students', pathMatch:'full'},
  {path:"students", component:StudentInfoComponent},
  {path:'student/:id', component:StudentComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"**",redirectTo:'students'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
