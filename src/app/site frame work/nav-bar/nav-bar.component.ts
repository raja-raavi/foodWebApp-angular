import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RegisteredUsersDataService } from 'src/app/services/registered-users-data.service';
import { Router } from '@angular/router';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  dropdownOpen = false;
  userName: any;
  hasItemsInCart: any
  @ViewChild(CartComponent) cart: CartComponent

  constructor(
    public regUsersService: RegisteredUsersDataService,
    private router: Router,
    private service: FoodListService
  ) {}

  ngAfterContentChecked(){
    this.checkCartItems()
  }

  signOut() {
    var result = window.confirm('are you sure want to Logout!!!');
    if (result == true) {
      this.router.navigate(['']);
      localStorage.clear();
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen; // Toggle the dropdown open/close
    //getting name form local storage
    this.userName =
      localStorage.getItem('userName').charAt(0).toUpperCase() +
      localStorage.getItem('userName').slice(1).toLowerCase();
  }


  // Check if there are items in the cart
  checkCartItems() {
    if(this.hasItemsInCart = this.service.getCartItems() !== null && this.service.getCartItems().length > 0){
      this.hasItemsInCart = true;
    } 
  }
}
