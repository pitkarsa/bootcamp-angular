import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username !: string ;
  password !: string;

  doLogin(){
      console.log("log in is clicked"); 
      // console.log(this.username, this.password); 
      this.service.verifyUserLogin(this.username, this.password);
  }

  constructor(private service: UserService){}


}
