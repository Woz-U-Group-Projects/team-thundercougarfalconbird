import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  // options allows us to flag that we are using credentials, which will allow the jtw cookie on all requests
  options = { withCredentials: true };

  // base url of the express back end
  url: string = "http://localhost:3000/products/";

  // boolean value to hold the login status
  loggedIn: boolean = false;

  inputProduct(product: Product): Observable<string> {
    return this.http.post<string>(this.url + "input", product, this.options);
  }

  getProduct(productId): Observable<Product> {
    return this.http.get<Product>(this.url + `productview/${productId}`, this.options);
  }

  getProductList(id): Observable<Product> {
    return this.http.get<Product>(this.url + `user_productlist/${id}`, this.options);
  }
}
