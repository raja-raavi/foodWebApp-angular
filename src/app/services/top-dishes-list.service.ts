import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { topDishes } from '../models/top_dishes_list';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopDishesListService {

  constructor(private http: HttpClient) { 

  }

  private topDishesSubject = new Subject<topDishes[]>();

  getTopDishesData(): Observable<topDishes[]> {
    this.http.get('http://localhost:3000/topDishes').subscribe((data: any) => {
      this.topDishesSubject.next(data);
    });
    return this.topDishesSubject.asObservable();
  }
}
