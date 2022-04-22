import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private registrationService:RegistrationService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    let fData = f.form.value;
    const registration = new Registration(
      fData.name,
      fData.surname,
      fData.birthday,
      fData.gender,
      fData.email,
      fData.grade,

    )
    this.registrationService.addRegistration(registration).subscribe((response)=>{
      console.log('įrašas pridėtas, atsakymas:');
      console.log(response);
    })
    


  }

}
