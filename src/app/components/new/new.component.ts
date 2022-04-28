import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from 'src/app/models/registration';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private registrationService: RegistrationService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

    if (!this.auth.isLoggedin) {
      this.router.navigate(["/login"]);
    }

  }

  onSubmit(f: NgForm) {
    let fData = f.form.value;
    const registration = new Registration(
      fData.name,
      fData.surname,
      fData.birthday,
      fData.gender,
      fData.email,
      fData.phone,
      fData.grade,

    )
    this.registrationService.addRegistration(registration).subscribe((response) => {
      console.log('įrašas pridėtas, atsakymas:');
      console.log(response);
      this.router.navigate(["/"]);
    })



  }

}
