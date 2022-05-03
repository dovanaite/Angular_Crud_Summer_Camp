import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Club } from '../module/club-module';

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
}
