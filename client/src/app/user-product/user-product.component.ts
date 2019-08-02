import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { User_Product } from '../models/user_product';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {
  user_product: User_Product = new User_Product();

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
       this.productService.getProductList(params.get('id')).subscribe(user_product =>{
          console.log(user_product);
          this.user_product = user_product;
      })   
      });
  }

}
