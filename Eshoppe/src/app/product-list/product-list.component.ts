import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  allProducts : Product[]=[];

  constructor(private service:ProductService){
      this.service.getAllProducts().subscribe(data => this.allProducts=data);    
  }
}
