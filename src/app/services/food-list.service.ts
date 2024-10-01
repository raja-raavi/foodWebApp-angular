import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, switchMap, throwError } from 'rxjs';
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

  //to get specific food Item
  getFoodItem(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/foodList/' + id);
  }

  //to create a new Item
  createFoodItem(itemBody: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/foodList', itemBody);
  }

  //to update an alredy existing Item
  updateFoodItem(id: number, itemBody: any): Observable<updateFoodItem> {
    return this.http.put<updateFoodItem>(
      'http://localhost:3000/foodList/' + id,
      itemBody
    );
  }

  //to delete an Item
  deleteFoodItem(id: number): Observable<foodList> {
    return this.http.delete<foodList>('http://localhost:3000/foodList/' + id);
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

  updateImagePath(id: number, imagePath: string): Observable<any> {
    return this.http.get(`http://localhost:3000/foodList/${id}`).pipe(
      switchMap((image) => {
        // If the image exists, update it with PUT
        return this.http.put(`http://localhost:3000/foodList/${id}`, {
          food_image: imagePath,
        });
      }),
      catchError((error) => {
        if (error.status === 404) {
          // If the image doesn't exist, create a new entry with POST
          return this.http.post('http://localhost:3000/foodList', {});
        }
        return throwError(error);
      })
    );
  }
}
