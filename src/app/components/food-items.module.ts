import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodItemsRoutingModule } from './food-items-routing.module';
import { FoodItemsComponent } from './food-items.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { InvalidSearchComponent } from './invalid-search/invalid-search.component';


@NgModule({
  declarations: [
    FoodItemsComponent,
    FoodMenuComponent,
    InvalidSearchComponent,
  ],
  imports: [
    CommonModule,
    FoodItemsRoutingModule
  ]
})
export class FoodItemsModule { }
