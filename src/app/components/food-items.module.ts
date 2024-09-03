import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodItemsRoutingModule } from './food-items-routing.module';
import { FoodItemsComponent } from './food-items.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { InvalidSearchComponent } from './invalid-search/invalid-search.component';
import { CartComponent } from './cart/cart.component';
import { PopupComponent } from './popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { PaymentConfirmedComponent } from './payment-confirmed/payment-confirmed.component';



@NgModule({
  declarations: [
    FoodItemsComponent,
    FoodMenuComponent,
    InvalidSearchComponent,
    CartComponent,
    PopupComponent,
    PlaceOrderComponent,
    PaymentPageComponent,
    PaymentConfirmedComponent,
  ],
  imports: [
    CommonModule,
    FoodItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ]
})
export class FoodItemsModule { }
