import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  allProducts : Product[]=[];
  numbers = interval(1000); // emit the infinite numbers from 0,1,2,3,4... after every 1000 ms

  constructor(private service:ProductService){
      // this.service.getAllProducts().subscribe(data => this.allProducts=data);    
  }

  data: any ; // we are receiving --> {"products":[{},{},...]}

  ngOnInit(): void {
    // this.service.getAllProducts().subscribe(data => this.allProducts=data);

    this.service.getAllProducts().subscribe(data => this.data = data );

    // this.mySubscription = this.numbers.subscribe(num => console.log('Received num:', num) )    ;
  }

  //unsubscription activity 
  // we need the instance var - subscription object
  mySubscription !: Subscription ;

  ngOnDestroy(): void {
    //Called once, just before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("Product list comp is will be destroyed now");
    // clean up activities - unsubscriptions to the observables susbcribed by this comp
    // this.mySubscription.unsubscribe();
  }

}
