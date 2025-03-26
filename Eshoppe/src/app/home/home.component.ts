import { Component } from '@angular/core';
import { interval, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    // variables
    // username = 'SAMRUDDHI';

    // // function returns string
    // getData(){
    //   return "Hello all";
    // }

    // // property binding
    // isDisabled=true;

    // constructor(){
    //   setTimeout(()=>{
    //     this.isDisabled=false;
    //   },5000);
    // }

    // // event binding
    // doLogin(){
    //   console.log("Login is clicked");
    // }

    // // two way data binding
    // // 
    // email = 'user@gmail.com';

    // // pipes demo
    // s = 'i Love Angular';
    // price = 50000;

    // // dates
    // today = new Date();

    // //json
    // obj = {id:101, name:"Amit"};

    // // directives
    // // structural directives - deals with the DOM structure

    // msg :string="hello";

    // data = [11,21,31,41];

    //Observables concept:
    mydata = [11,12,13,"hello", {id:101,name:'Amit'}];

    myObservable1 = of(11,12,13,"hello", {id:101,name:'Amit'});
    myObservable2 = interval(1000);// emits the infinite values after every 1 second, starting with 0, 1,2,3......

    constructor(){
      // console.log(this.myObservable1);
      this.myObservable1.subscribe({
        //observer object - 
        next:data => console.log('received data',data ),
        error:err=>console.log('Error occurred:',err),
        complete: ()=>console.log('Observables completed')        
      });// to the subscribe(observer);

      // common syntax to subscribe to the observable:
      /* in case of error or complete - observable is unsubscribe to
      observable .
      */   
     
      // this.myObservable1.subscribe(data => console.log('Data: ',data ));
      // this.myObservable2.subscribe({next:num => console.log('received number:', num)   });
      // this.myObservable2.subscribe(num => console.log('received number:', num)   );
    }
}
