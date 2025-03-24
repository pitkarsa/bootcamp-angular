import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // isLoggedIn = false;

  // // LOgin component will call this method
  // verifyUserLogin(username:string, password:string){
  //   if (username==="admin" && password==="admin123"){
  //     this.isLoggedIn=true;
  //   }
  //   else{
  //     alert("wrong credentails !");
  //   }
  // }

  // // APP component will call this method to know if the user is logged in or not
  // getLoggedInStatus(){
  //   return this.isLoggedIn;
  // }

  isLoggedIn = signal(false);

  constructor(){
    const val = localStorage.getItem("login");
    if (val){
      this.isLoggedIn.set(true);
    }
  }

  // LOgin component will call this method
  verifyUserLogin(username:string, password:string){
    if (username==="admin" && password==="admin123"){
      this.isLoggedIn.set(true);
      localStorage.setItem("login","true");
    }
    else{
      alert("wrong credentails !");
    }
  }

  // APP component will call this method to know if the user is logged in or not
  // getLoggedInStatus(){
  //   return this.isLoggedIn;
  // }
}
