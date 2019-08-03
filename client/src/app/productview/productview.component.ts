import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  product: Product = new Product();
  
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
   
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
       this.productService.getProductView(params.get('id')).subscribe(productId =>{
          console.log(productId);
          this.product = productId;
      })   
      });
  
  }

}