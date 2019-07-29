import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Wishlist } from '../models/wishlist';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist: Wishlist = new Wishlist();

  constructor(private wishlistService: WishlistService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
       this.wishlistService.getWishList(params.get('id')).subscribe(wishlist =>{
          console.log(wishlist);
          this.wishlist = wishlist;
      })   
      });
  }

}
