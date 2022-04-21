import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    console.log(f);
    console.log('veikia');
  }

}
