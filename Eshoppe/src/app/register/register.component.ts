import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // FormGroup - it is a collection of FormControl.
  // these FormGroup and FormControl clases are defined in the ReactiveFormsModule

  registerForm = new FormGroup({
      fullName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl(),
      confirmPassword: new FormControl()
      // ,address: new FormGroup({
      //   city: new FormControl(),
      //   state: new FormControl()
      // })
  });

  get fullNameCtrl() {
    return this.registerForm.get("fullName") as FormControl;
  }

  get emailCtrl(){
    return this.registerForm.get("email") as FormControl;
  }

  doRegister():void{
    console.log(this.registerForm.value);    
  }

}
