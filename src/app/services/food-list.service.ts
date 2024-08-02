import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { foodList } from '../models/food-list'

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor(private http: HttpClient) { }

  private foodListSubject = new Subject<foodList[]>();

  getFoodListData() : Observable <foodList[]> {
    this.http.get('http://localhost:3000/food_list').subscribe((data:any)=>{
      this.foodListSubject.next(data)
    })
    return this.foodListSubject.asObservable();
  }
}
