import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  receivedProduct !:Product ;
  // we need to get the id from the current route 
  constructor(private route:ActivatedRoute,
    private service:ProductService,
    private router:Router
  ){}


  ngOnInit(): void {
      this.route.paramMap.subscribe(paramMap => {
        const productId = paramMap.get('pid');
        // console.log('Details component productId:', productId);
        this.service.getProductById(productId).subscribe(data=>this.receivedProduct = data);       
      });
  }

  goToProductList(){
    // programatic navigation
    // for this we need the Router object
    this.router.navigate(['/products']);
  }
   
}
