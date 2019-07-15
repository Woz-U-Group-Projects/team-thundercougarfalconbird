import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`${this.uri}/users`);
  }

  getUserById(id) {
    return this.http.get(`${this.uri}/users/${id}`);
  }

  
}
