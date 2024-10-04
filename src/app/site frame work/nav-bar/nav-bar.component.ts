import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { RegisteredUsersDataService } from 'src/app/services/registered-users-data.service';
import { Router } from '@angular/router';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { FoodListService } from 'src/app/services/food-list.service';
import { BehaviorSubject, interval } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  dropdownOpen = false;
  userName: any;
  cartEmpty: boolean;
  @ViewChild(CartComponent) cart: CartComponent

  constructor(
    public regUsersService: RegisteredUsersDataService,
    private router: Router,
    private service: FoodListService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterContentChecked(){
    //console.log(this.service.hasCartEmpty());
    this.cartEmpty = this.service.hasCartEmpty();
    
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
}
