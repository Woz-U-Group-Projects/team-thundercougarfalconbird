import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) { }

  input(): void {
    this.productService.inputProduct(this.product).subscribe(() => {
      // user registered, send them to the login page
      this.router.navigate(["/productlist"]);
    });
  }

  ngOnInit() {
  }

}
