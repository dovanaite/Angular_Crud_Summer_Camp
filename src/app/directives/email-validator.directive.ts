import { Directive } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]'
})
export class EmailValidatorDirective {

  constructor() { }
 
}
