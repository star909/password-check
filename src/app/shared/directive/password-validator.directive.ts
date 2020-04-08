import { Directive,forwardRef,Attribute } from '@angular/core';
import { Validator,AbstractControl, NG_VALIDATORS } from '@angular/forms';

 /**Declaring Directive*/
@Directive({
  selector: '[appPasswordValidator] [formControlName],[appPasswordValidator][formControl],[appPasswordValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordValidatorDirective), multi: true }
  ]
})
export class PasswordValidatorDirective implements Validator {

   /**Declaring class*/
  constructor(@Attribute('appPasswordValidator') public appPasswordValidator: string, 
  @Attribute('reverse') public reverse: string) {

}

/**
   * @ function : Get reverse()
   * @ Purpose  : getting reverse action notification
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
private get isReverse(){
  if (!this.reverse){return false;}
 
  return this.reverse=='true'?true:false;
} 
/**
   * @ function : validate()
   * @ Purpose  : getting validation
   * @ version  : 1.0.1
   * @ author   : Shivam
   */


validate(c:AbstractControl): {[key:string]:any}{
  const confirmPassword = c.value;
    const password = c.root.get(this.appPasswordValidator)
  
  if(password&&confirmPassword !==password.value&& !this.isReverse){
    return {
      appPasswordValidator:false
    }
  }
  return null;
}

}
