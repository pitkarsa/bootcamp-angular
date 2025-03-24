import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eshoppe';
//  status :boolean = this.service.getLoggedInStatus();// false

  status = this.service.isLoggedIn;

  constructor(private service:UserService){ }

  // getStatus(){
  //   this.status = this.service.getLoggedInStatus();
  // }



}
