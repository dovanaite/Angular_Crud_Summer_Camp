import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private loadData(){
    this.registrationService.getRegistrations().subscribe((response)=>{
      this.kidRegistrations=response;
  });
  }

  public kidRegistrations:Registration[]=[];

  constructor(private registrationService:RegistrationService) { }

  ngOnInit(): void {
    this.loadData();
  }

  deleteRegistration(id:String){
    this.registrationService.deleteRegistration(id).subscribe((response)=>{

      console.log("ištrinta");
      this.loadData();
    });
  }

}
