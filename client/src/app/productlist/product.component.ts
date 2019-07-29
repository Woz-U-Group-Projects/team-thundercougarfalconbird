import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product = new Product();
  
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductList().subscribe(product => (this.products = product));  
  }

}
