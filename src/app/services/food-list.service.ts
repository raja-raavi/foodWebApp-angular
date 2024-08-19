import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { foodList } from '../models/food-list'
import { deliveryinformation } from '../models/deliveryInfo';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  selectedItems: any = {};

  constructor(private http: HttpClient) { }

  private foodListSubject = new Subject<foodList[]>();

  getFoodListData() : Observable <foodList[]> {
    this.http.get('http://localhost:3000/foodList').subscribe((data:any)=>{
      this.foodListSubject.next(data)
    })
    return this.foodListSubject.asObservable();
  }

  getFoodItem(id: number) : Observable <any> {
   return this.http.get('http://localhost:3000/foodList/'+id);
  }

  // updateSelectedItems(index: number, foodItem: any) {
  //   this.selectedItems[foodItem.id] = {
  //     ...foodItem,
  //     quantity: foodItem.food_quantity
  //   };
  // }

  getCartItems() {
    return this.selectedItems;
  }

  //to store delivery Info
  deliveryInformation(info:deliveryinformation) : Observable<deliveryinformation>{
   return this.http.post<deliveryinformation>('http://localhost:3000/DeliveryInfo', info);
  }

}
