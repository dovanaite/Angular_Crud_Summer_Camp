import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FooterComponent } from './components/footer/footer.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';
import { RegistrationToNaturalistClubComponent } from './components/registration-to-naturalist-club/registration-to-naturalist-club.component';
import { RegisteredKidsComponent } from './components/registered-kids/registered-kids.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    NewComponent,
    AgeValidatorDirective,
    UpdateRegistrationComponent,
    AuthComponent,
    EmailValidatorDirective,
    FooterComponent,
    ChangePasswordComponent,
    AuthComponent,
    RegistrationToNaturalistClubComponent,
    RegisteredKidsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
