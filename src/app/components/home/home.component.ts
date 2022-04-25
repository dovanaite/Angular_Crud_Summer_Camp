import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isData=false;
  public isError:boolean=false;
  public isLoading:boolean=true;

  private loadData(){
    this.registrationService.getRegistrations().subscribe({
      next:(response)=>{
        this.registration=response;
        this.isData=true;
        this.isLoading=false;
        console.log(this.registration);
      },
      error:(error)=>{
        this.isLoading=false;
        this.isError=true;
      }
    })
  }

  public registration:Registration[]=[];

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
