import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signup } from '../models/signup';

@Injectable({
  providedIn: 'root',
})
export class RegisteredUsersDataService {
  constructor(private http: HttpClient) {}

  //posting registered user data to DataBase
  registeredUsers(info: signup): Observable<signup> {
    return this.http.post<signup>(
      'http://localhost:3000/registeredUsers',
      info
    );
  }

  //getting registered users data
  getRegisteredUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/registeredUsers');
  }

  //Function to check is user logged in or not
  isUserLoggedIn() {
    if (localStorage.getItem('role') === 'User') {
      return true;
    }
    return false;
  }

  //Function to check is admin loggedin or not
  isAdminLoggedIn() {
    if (localStorage.getItem('role') === 'Admin') {
      return true;
    }
    return false;
  }
}
