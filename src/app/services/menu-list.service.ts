import { Injectable } from '@angular/core';
import { menuList } from '../models/menu-list';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor(private http: HttpClient) {}

  private menuListSubject = new Subject<menuList[]>();

  getMenuData(): Observable<menuList[]> {
    this.http.get('http://localhost:3000/menuList').subscribe((data: any) => {
      this.menuListSubject.next(data);
    });
    return this.menuListSubject.asObservable();
  }
}
