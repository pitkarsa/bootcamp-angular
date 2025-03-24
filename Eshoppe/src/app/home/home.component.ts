import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    // variables
    username = 'SAMRUDDHI';

    // function returns string
    getData(){
      return "Hello all";
    }

    // property binding
    isDisabled=true;

    constructor(){
      setTimeout(()=>{
        this.isDisabled=false;
      },5000);
    }

    // event binding
    doLogin(){
      console.log("Login is clicked");
    }

    // two way data binding
    // 
    email = 'user@gmail.com';

    // pipes demo
    s = 'i Love Angular';
    price = 50000;

    // dates
    today = new Date();

    //json
    obj = {id:101, name:"Amit"};

    // directives
    // structural directives - deals with the DOM structure

    msg :string="hello";

    data = [11,21,31,41];
}
