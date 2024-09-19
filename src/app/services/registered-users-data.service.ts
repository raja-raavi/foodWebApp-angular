import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signup } from '../models/signup';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUsersDataService {

  constructor(private http: HttpClient) { }

  registeredUsers(info: signup) : Observable<signup>{
    return this.http.post<signup>('http://localhost:3000/registeredUsers', info);
  }

  getRegisteredUsers() : Observable<any>{
    return this.http.get<any>('http://localhost:3000/registeredUsers');
  }

  isUserLoggedIn(){
    if(localStorage.getItem('userName') ==null && localStorage.getItem('email') == null && localStorage.getItem('password') == null){
      return false;
    }else{
      return true;
    }
  }
}
