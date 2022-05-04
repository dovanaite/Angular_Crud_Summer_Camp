import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';
import { RegisteredKidsComponent } from './components/registered-kids/registered-kids.component';
import { RegistrationToNaturalistClubComponent } from './components/registration-to-naturalist-club/registration-to-naturalist-club.component';
import { UpdateRegistrationComponent } from './components/update-registration/update-registration.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "new", component: NewComponent },
  { path: "update/:id", component: UpdateRegistrationComponent },
  { path: 'login', component: AuthComponent },
  { path: 'pass', component: ChangePasswordComponent },
  { path: 'nature', component: RegistrationToNaturalistClubComponent },
  { path: 'registered-kids', component: RegisteredKidsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
