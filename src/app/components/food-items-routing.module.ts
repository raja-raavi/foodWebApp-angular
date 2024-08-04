import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodItemsComponent } from './food-items.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { InvalidSearchComponent } from './invalid-search/invalid-search.component';


const routes: Routes = [
  { path: '', component: FoodItemsComponent },
  {path:'foodMenu/:id', component: FoodMenuComponent},
  {path: 'foodMenu', component: FoodMenuComponent},
  {path: '**', component: InvalidSearchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodItemsRoutingModule { }
