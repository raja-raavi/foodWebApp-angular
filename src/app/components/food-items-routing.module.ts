import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodItemsComponent } from './food-items.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { InvalidSearchComponent } from './invalid-search/invalid-search.component';
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaymentConfirmedComponent } from './payment-confirmed/payment-confirmed.component';
import { AuthenticationGuard } from '../guards/authentication.guard';


const routes: Routes = [
  { path: '', component: FoodItemsComponent },
  {path:'food-menu/:id', component: FoodMenuComponent},
  {path: 'food-menu', component: FoodMenuComponent, canActivate: [AuthenticationGuard]},
  {path: 'cart', component: CartComponent},
  {path: 'place-order', component: PlaceOrderComponent, canActivate: [AuthenticationGuard]},
  {path: 'payment', component: PaymentPageComponent, canActivate: [AuthenticationGuard]},
  {path: 'payment-confimed', component: PaymentConfirmedComponent, canActivate: [AuthenticationGuard]},
  {path: '**', component: InvalidSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodItemsRoutingModule { }
