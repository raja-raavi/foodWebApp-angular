import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './site frame work/home/home.component';
import { NavBarComponent } from './site frame work/nav-bar/nav-bar.component';
import { FooterComponent } from './site frame work/footer/footer.component';
import { MenuListService } from './services/menu-list.service';
import { FoodListService } from './services/food-list.service';
import { ExploreMenuComponent } from './site frame work/explore-menu/explore-menu.component';
import { menuStyleDirective } from './Directives/menuStyle.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ExploreMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MenuListService, FoodListService, menuStyleDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
