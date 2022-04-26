import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.register("donata@gmail.com","labaslabas")
  }

  public onSubmit(form:NgForm){
    const email:String=form.value.email;
    const password:String=form.value.password;
    this.auth.register(email,password).subscribe((response)=>{
      console.log(response);
    })

  }

}
