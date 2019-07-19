import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  product: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(product => (this.product = product));
  }

}
