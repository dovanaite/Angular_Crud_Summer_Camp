import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration } from 'src/app/models/registration';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.css']
})
export class UpdateRegistrationComponent implements OnInit {

  public id: String;
  public registration: Registration = new Registration("", "", 0, "", "", "", 5);
  public isData = false;
  public isError: boolean = false;
  public isLoading: boolean = true;

  constructor(private registrationService: RegistrationService, private router: Router, private route: ActivatedRoute, private auth: AuthService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

    if (!this.auth.isLoggedin) {
      this.router.navigate(["/login"]);
    }


    this.registrationService.getRegistration(this.id).subscribe({
      next: (response) => {
        this.registration = response;
        this.isData = true;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
      }
    })


  }

  public onSubmit() {
    console.log(this.registration);
    this.registrationService.updateRegistration(this.registration).subscribe({
      next: (response) => {
        this.router.navigate(["/"]);
        this.isData = true;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
      }
    });
  }


}
