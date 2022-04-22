import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private readonly url = "https://summercamp-2f951-default-rtdb.europe-west1.firebasedatabase.app"

  constructor(private http:HttpClient) {

   }
   
   public addRegistration(registration:Registration){
    return this.http.post(this.url+"/registrations.json",registration);
    }
}
