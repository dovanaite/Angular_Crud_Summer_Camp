import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[AgeValidator]',
  providers:[
    {
    provide: NG_VALIDATORS,
    useExisting:AgeValidatorDirective,
    multi:true
    }
  ]
})
export class AgeValidatorDirective implements Validators{

  constructor() { }

  validate(control:FormControl): ValidationErrors | null {

    let kidsAge:number=control.value;

    let currentYear:number = new Date().getFullYear() //grąžina dabartinius metus

    let availableAge:number = currentYear - kidsAge;

    if(availableAge>=18 || availableAge<=12){
      return {'error':'Klaida'}

    }
    return null;
  }
}
