import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';
import { UpdateRegistrationComponent } from './components/update-registration/update-registration.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"new", component:NewComponent},
  {path:"update/:id", component:UpdateRegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
