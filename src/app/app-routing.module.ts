import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './site frame work/home/home.component';
import { ErrorComponent } from './site frame work/error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'foodItems', loadChildren: () => import('./components/food-items.module').then(m => m.FoodItemsModule) },
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
