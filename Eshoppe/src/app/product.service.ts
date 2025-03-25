import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // send HTTP requests to api - json-server
  // receive the Observables

  // to add type safety, we need to defie the Type of data that will be received

  // we will send the HTTP request to the api endpoints 
  //e.g localhost:3000/products

  // to make the communication type safe, we need to declare the structure of the data within Angular app - model

  constructor(private http:HttpClient){}

  getAllProducts() : Observable<Product[]> {    
    // send the http get request to api
    // get reqquest responds with Observable object
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  

}
