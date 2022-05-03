import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Club } from 'src/app/module/club-module';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-registration-to-naturalist-club',
  templateUrl: './registration-to-naturalist-club.component.html',
  styleUrls: ['./registration-to-naturalist-club.component.css']
})
export class RegistrationToNaturalistClubComponent implements OnInit {

  public naturalistClubForm: FormGroup;

  constructor(private clubService: ClubService) {
    this.naturalistClubForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'surname': new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'grade': new FormControl(null, [Validators.required, this.checkGrade]),
      'allergy': new FormArray([]),
      'club': new FormArray([])
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.naturalistClubForm.value);


    this.clubService.addClubInformation(this.naturalistClubForm.value).subscribe((response) => {
      console.log('pridėtas įrašas:');
      console.log(response);
    })

    this.naturalistClubForm.reset();
  }

  checkGrade(control: FormControl): { [s: string]: boolean } | null {
    if (control.value >= 6 && control.value <= 12) {
      return null;
    } else {
      return { 'gradeIncorect': true }
    }
  }

  addAllergy() {
    const input = new FormControl(null, Validators.required);
    (<FormArray>this.naturalistClubForm.get('allergy')).push(input);
  }

  removeAllergy() {
    (<FormArray>this.naturalistClubForm.get('allergy')).controls.pop();
  }

  get allergies() {
    return (<FormArray>this.naturalistClubForm.get('allergy')).controls;
  }

  addClub() {
    const club = new FormGroup({
      year: new FormControl(null, Validators.required),
      clubName: new FormControl(null, Validators.required),
      clubType: new FormControl(null, Validators.required),
    });
    (<FormArray>this.naturalistClubForm.get('club')).push(club);
  }

  get clubs() {
    return (<FormArray>this.naturalistClubForm.get('club')).controls;
  }

  toFormGroup(el: AbstractControl): FormGroup {
    return <FormGroup>el;
  }



}
