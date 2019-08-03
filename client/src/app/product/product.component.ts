import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(product => (this.product = product));
  }

}
