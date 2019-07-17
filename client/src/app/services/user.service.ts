import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  signupUser(user: User): Observable<string> {
    return this.http.post<string>(this.url + 'signup', user);
  }

  loginUser(user: User): Observable<string> {
    return this.http.post<string>(this.url + 'login', user);
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(this.url + 'profile');
  }

  logout(): Observable<string> {
    return this.http.get<string>(this.url + 'logout');
  }

}
