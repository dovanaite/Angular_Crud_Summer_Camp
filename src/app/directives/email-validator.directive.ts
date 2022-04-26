import { Directive } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]'
})
export class EmailValidatorDirective {

  constructor() { }
  validate(control: FormControl): ValidationErrors | null {
    let email : string=control.value;
   


    let patern :RegExp= /^[a-z|A-Z]{3}[0-9]{3}$/;
   
    if ( ! patern.test(email)){
      return {'error':'Klaida'};
    }

    
   
    return null;
  }
}
