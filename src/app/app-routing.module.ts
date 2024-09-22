import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './site frame work/home/home.component';
import { ErrorComponent } from './site frame work/error/error.component';
import { AboutusComponent } from './site frame work/aboutus/aboutus.component';
import { ContactusComponent } from './site frame work/contactus/contactus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'food-items',
    loadChildren: () =>
      import('./components/food-items.module').then((m) => m.FoodItemsModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'adminDashboard', loadChildren: () => import('./Admin Dashboard/admin/admin.module').then(m => m.AdminModule) },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
