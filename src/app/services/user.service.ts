import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeetingRequest } from '../models/MeetingRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAllRequest(username: string): Observable<[MeetingRequest]> {
    const url = 'http://localhost:9999/user/getAllRequest/' + username;
    return this.http.get<[MeetingRequest]>(url);
  }
}
