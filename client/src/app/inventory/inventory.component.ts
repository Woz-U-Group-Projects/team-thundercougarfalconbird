import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { User_Product } from '../models/user_product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  product: Product = new Product();
  user: User = new User();
  user_product: User_Product = new User_Product();

  constructor(private productService: ProductService, 
    private userService: UserService, 
    private router: Router,
    private route: ActivatedRoute) { }

  input(): void {
    this.productService.inputProduct(this.product).subscribe(() => {
      this.router.navigate(["/productview"]);
    });
  }

  ngOnInit() {
  }

}
