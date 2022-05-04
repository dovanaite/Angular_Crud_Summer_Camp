import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/clubs';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-registered-kids',
  templateUrl: './registered-kids.component.html',
  styleUrls: ['./registered-kids.component.css']
})
export class RegisteredKidsComponent implements OnInit {

  public registeredKidsInClub: Club[] = [];

  constructor(private clubService: ClubService) { }

  ngOnInit(): void {

    this.clubService.getRegisteredKids().subscribe((response) => {
      this.registeredKidsInClub = response;
    })
  }

}
