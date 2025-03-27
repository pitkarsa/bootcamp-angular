import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';

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

  constructor(private http:HttpClient){
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

  userRegistration(fullName:any, email:any, password:any): Observable<User>{
     return this.http.post<User>('http://localhost:3000/users',{fullName, email, password});
  }
}
