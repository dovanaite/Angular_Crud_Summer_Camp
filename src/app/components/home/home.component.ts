import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public kidRegistrations:Registration[]=[];

  constructor(private registrationService:RegistrationService) { }

  ngOnInit(): void {
    this.registrationService.getRegistrations().subscribe((response)=>{
      this.kidRegistrations=response;
  });
  }

}
