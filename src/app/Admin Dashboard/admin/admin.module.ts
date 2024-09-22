import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './AdminComponents/add-item/add-item.component';
import { UpdateItemComponent } from './AdminComponents/update-item/update-item.component';
import { DeleteItemComponent } from './AdminComponents/delete-item/delete-item.component';
import { ViewItemComponent } from './AdminComponents/view-item/view-item.component';
import { FilterItemsComponent } from './AdminComponents/filter-items/filter-items.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    AddItemComponent,
    UpdateItemComponent,
    DeleteItemComponent,
    ViewItemComponent,
    FilterItemsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
