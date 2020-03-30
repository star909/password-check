import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-check',
  templateUrl: './password-check.component.html',
  styleUrls: ['./password-check.component.css']
})
export class PasswordCheckComponent implements OnInit {
  
constructor(private fb:FormBuilder) { }
/**
   * @ FormData : passwordData
   * @ Purpose  : Creating form data with validation
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
passwordData:FormGroup = this.fb.group({
  password :['',[Validators.required]],
  confirmPassword:['']
},
{validator: this.passwordMatchValidator},
);

/**
   * @ function : passwordMatchValidator()
   * @ Purpose  : Checking the confirm password with password
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
 private passwordMatchValidator(frm:FormGroup){
  let pass = frm.get('password').value;
  let confirmPass = frm.get('confirmPassword').value;

  return pass === confirmPass ? null : { mismatch: true }
}
/**
   * @ function : Submit()
   * @ Purpose  : submitting the form data
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
public submit():void{
  console.log("form Data:",this.passwordData.value);
}
/**
   * @ function : formData()
   * @ Purpose  : Getting controls of the form data
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
 public get formData():any{
return this.passwordData.controls;
}
  ngOnInit(): void {
  }

}
