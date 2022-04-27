import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthResponseData } from '../models/auth.response.data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedin = false;
  public user?: AuthResponseData;

  constructor(private http:HttpClient) { }


  public register(email:String,password:String){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBLAIr0hHb7xkYMundsV1MbIG2WZ2oduXU',{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap((response) => {
      this.isLoggedin = true;
      this.user = response;
    }));
  }

  public login(email: String, password: String) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLAIr0hHb7xkYMundsV1MbIG2WZ2oduXU', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap((response) => {
      this.isLoggedin = true;
      this.user = response;
    }));
  }

  public logout() {
    this.isLoggedin = false;
    this.user = undefined;
  }
}
