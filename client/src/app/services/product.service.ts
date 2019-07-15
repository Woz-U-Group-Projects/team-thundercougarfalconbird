import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get(`${this.uri}/product`);
  }

  getProductById(id) {
    return this.http.get(`${this.uri}/product/${id}`);
  }

}
