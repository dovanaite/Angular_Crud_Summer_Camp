import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Registration } from '../models/registration';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  public loadRegistration(registration: Registration) {
    throw new Error('Method not implemented.');
  }

  private readonly url = "https://summercamp-2f951-default-rtdb.europe-west1.firebasedatabase.app"

  constructor(private http:HttpClient) {

   }
   
   public addRegistration(registration:Registration){
    return this.http.post(this.url+"/registrations.json",registration);
    }

    public getRegistration(id:String){
      return this.http.get<Registration>(this.url+"/registrations/"+id+".json").pipe( map((response)=>{
        response.id=id;
        return response;
      }));
    }

    public getRegistrations(){
      return this.http.get<{[key:string]:Registration}>(this.url+"/registrations.json").pipe( map((response)=>{
        const regArray:Registration[]=[];
        for(let key in response){
          regArray.push({...response[key],id:key});
        }
        return regArray;
      }));
    }

    public deleteRegistration(id:String){
      return this.http.delete(this.url+"/registrations/"+id+".json");
    }

    public updateRegistration(registration:Registration){
      return this.http.patch(this.url+"/registrations/"+registration.id+".json", registration);
    }

 

}
