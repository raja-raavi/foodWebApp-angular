import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './AdminComponents/add-item/add-item.component';
import { UpdateItemComponent } from './AdminComponents/update-item/update-item.component';
import { DeleteItemComponent } from './AdminComponents/delete-item/delete-item.component';
import { ViewItemComponent } from './AdminComponents/view-item/view-item.component';
import { FilterItemsComponent } from './AdminComponents/filter-items/filter-items.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'admin-home-page', component: HomeComponent },
  { path: 'admin-add-item', component: AddItemComponent },
  { path: 'admin-update-item/:id', component: UpdateItemComponent },
  { path: 'admin-delete-item', component: DeleteItemComponent },
  { path: 'admin-view-item', component: ViewItemComponent },
  { path: 'admin-filter-items', component: FilterItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
