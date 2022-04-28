import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public passChanged = false;
  public isError: boolean = false;


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  public onPassChange(form: NgForm) {
    const password = form.value.password;
    this.auth.changePassword(password).subscribe({
      next: () => {
        this.passChanged = true;
      },
      error: () => {
        this.isError = true;
      }
    });
  }

}
