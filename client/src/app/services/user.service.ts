/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
  loggedIn = false;

  constructor(private _http: HttpClient) {}

  register(body: any) {
    return this._http.post('/users/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  login(body: any) {
    return this._http.post('/users/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  user() {
    this.loggedIn = true;
    console.log('what loggedin');
    return this._http.get('/users/user', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  logout() {
    this.loggedIn = false;
    console.log('no loged out');
    return this._http.get('/users/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
}
