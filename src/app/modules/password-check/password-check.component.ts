import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-check',
  templateUrl: './password-check.component.html',
  styleUrls: ['./password-check.component.css']
})
export class PasswordCheckComponent implements OnInit {
  @Input()
  pattern: string | RegExp;  /**Adding pattern to validate through regular expression */
  
constructor(private fb:FormBuilder) { }

ngOnInit(): void {
}
/**
   * @ FormData : passwordData
   * @ Purpose  : Creating form data with validation
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
passwordData:FormGroup = this.fb.group({
  password: ['',[Validators.required,Validators.pattern]],
  confirmPassword: ['',[Validators.required]]
},
);
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
  
}
