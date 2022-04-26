import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  public register(email:String,password:String){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBLAIr0hHb7xkYMundsV1MbIG2WZ2oduXU',{
      email:email,
      password:password,
      returnSecureToken:true
    })
  }
}
