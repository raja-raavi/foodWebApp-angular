import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { foodList } from '../models/food-list';
import { deliveryinformation } from '../models/deliveryInfo';
import { updateFoodItem } from '../models/updateFoodItem';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  selectedItems: any = {};

  constructor(private http: HttpClient) {}

  private foodListSubject = new Subject<foodList[]>();

  getFoodListData(): Observable<foodList[]> {
    this.http.get('http://localhost:3000/foodList').subscribe((data: any) => {
      this.foodListSubject.next(data);
    });
    return this.foodListSubject.asObservable();
  }

  getFoodItem(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/foodList/' + id);
  }

  updateFoodItem(id: number, itemBody: any): Observable<updateFoodItem> {
    return this.http.put<updateFoodItem>(
      'http://localhost:3000/foodList/' + id,
      itemBody
    );
  }

  getCartItems() {
    return this.selectedItems;
  }

  //to store delivery Info
  deliveryInformation(
    info: deliveryinformation
  ): Observable<deliveryinformation> {
    return this.http.post<deliveryinformation>(
      'http://localhost:3000/DeliveryInfo',
      info
    );
  }
}
