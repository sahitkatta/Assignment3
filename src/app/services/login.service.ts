import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './../models/Login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  isAuthicatedAsUser: boolean;
  isAuthicatedAsAdmin: boolean;
  authenticate(user: Login): Observable<Login> {
    const url = 'http://localhost:9999/login/authN';
    return this.http.post<Login>(url, user);
  }
}
