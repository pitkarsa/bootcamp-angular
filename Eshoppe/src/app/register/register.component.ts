import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

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

  constructor(private service:UserService){}

  doRegister():void{
    // console.log(this.registerForm.value);   
    const {fullName, email, password} = this.registerForm.value;
    this.service.userRegistration(fullName,email, password).subscribe(data=>console.log("registred User:", data)
    )
  }

}
