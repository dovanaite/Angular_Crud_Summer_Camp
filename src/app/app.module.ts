import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NewComponent } from './components/new/new.component';
import { AgeValidatorDirective } from './directives/age-validator.directive';
import { UpdateRegistrationComponent } from './components/update-registration/update-registration.component';
import { AuthComponent } from './components/auth/auth.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    NewComponent,
    AgeValidatorDirective,
    UpdateRegistrationComponent,
    AuthComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
