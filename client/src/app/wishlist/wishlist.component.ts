import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Wishlist } from '../models/wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist: Wishlist = new Wishlist();

  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
    this.wishlistService.getWishList().subscribe(wishlist => (this.wishlist = wishlist));
  }

}
