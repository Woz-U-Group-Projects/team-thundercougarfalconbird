import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Wishlist } from "../models/wishlist";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }
  
  // options allows us to flag that we are using credentials, which will allow the jtw cookie on all requests
  options = { withCredentials: true };

  // base url of the express back end
  url: string = "http://localhost:3000/wishlist/";

  // boolean value to hold the login status
  loggedIn: boolean = false;

  getWishList(): Observable<any> {
    return this.http.get<any>(this.url + "wish", this.options);
  }
}
