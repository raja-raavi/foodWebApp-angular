import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalService {
  
  discountedTotal: number;
  finalDeliveryFee: number;
  finalSubTotal: number;
  placeOrderPageTotal : number;
}
