import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisteredUsersDataService } from '../services/registered-users-data.service';
import { PopupService } from '../services/popup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private regUsersService: RegisteredUsersDataService, private popupService: PopupService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.regUsersService.isUserLoggedIn()){
        return true;
      }else{
        alert("To access this component you have to login!!")
        return false;
      } 
  }
  
}
