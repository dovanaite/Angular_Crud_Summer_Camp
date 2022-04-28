import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponseData } from 'src/app/models/auth.response.data';
import { Registration } from 'src/app/models/registration';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isData = false;
  public isError: boolean = false;
  public isLoading: boolean = true;
  public registration: Registration[] = [];
  public isLoggedin = false;
  public user?: AuthResponseData;



  constructor(private registrationService: RegistrationService, private router: Router, private auth: AuthService) { }

  private loadData() {
    this.registrationService.getRegistrations().subscribe({
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

  ngOnInit(): void {

    this.loadData();
    this.isLoggedin = this.auth.isLoggedin;
    this.user = this.auth.user;
  }

  deleteRegistration(id: String) {
    this.registrationService.deleteRegistration(id).subscribe((response) => {
      this.loadData();
    });
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
