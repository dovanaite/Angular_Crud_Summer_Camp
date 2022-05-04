import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Club } from '../models/clubs';


@Injectable({
  providedIn: 'root'
})
export class ClubService {

  public clubInformation(club: Club) {
    throw new Error('Method not implemented.');
  }

  private readonly url = "https://summercamp-2f951-default-rtdb.europe-west1.firebasedatabase.app"

  constructor(private http: HttpClient) { }

  public addClubInformation(club: Club) {
    return this.http.post(this.url + "/clubs.json", club);
  }

  public getRegisteredKids() {
    return this.http.get<{ [key: string]: Club }>(this.url + "/clubs.json").pipe(map((response) => {
      const registeredKids: Club[] = [];
      for (let key in response) {
        registeredKids.push({ ...response[key] })
      }
      return registeredKids;
    }))
  }
}
