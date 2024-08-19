import { Component, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';
import { PopupService } from '../../services/popup.service';
import { PopupComponent } from '../popup/popup.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems: any;
  subTotal:number = 0;
  deliveryFee: number = 0;  
  Total:number = 0;
  isCoupounApplied: boolean = false;
  
  @Output() cartData = new EventEmitter(); //emitting data

  constructor(private foodListService: FoodListService, public popupService: PopupService, private router: Router){

  }

  

  ngOnInit(){
    this.cartItems = this.foodListService.getCartItems().filter((item) => item.food_quantity > 0);
    this.calculateTotals();

    //emitting the data to placeOrder compoenent
    this.cartData.emit({
      cartItems: this.cartItems,
      subTotal: this.subTotal,
      deliveryFee: this.deliveryFee,
      Total: this.Total
    });
  }
  
  //removing Items from cart when cross button is clicked
  removeItemFromCart(index: number){
    if (this.cartItems[index].food_quantity > 1) {
      this.cartItems[index].food_quantity--;
      this.cartItems[index].total = this.cartItems[index].food_price * this.cartItems[index].food_quantity;
    } else {
      this.cartItems.splice(index, 1);  // remove one element at index
    }
    this.calculateTotals();
  }
  
  //calculating total 
  calculateTotals(){
    this.subTotal = 0;
    for(let ele of this.cartItems){
      this.subTotal += ele.food_quantity * ele.food_price;
    }
    // Calculate delivery fee
    this.deliveryFee = this.getDeliveryFee(this.subTotal);
    // Calculate total
    this.Total = this.subTotal + this.deliveryFee;
  }
  
  getDeliveryFee(subTotal: number){
    if(subTotal > 100){
      return 5;
    } else if(subTotal > 75){
      return 10;
    } else if (subTotal > 50){
      return 15;
    } else if (subTotal > 25){
      return 20;
    } else if(subTotal > 10){
      return 25;
    }
    return 0; // default delivery fee
  }

  //for Coupoun code
  calculatePercentage(number, percent) {
    return (number / 100) * percent;
  }

  userInput(input){
    if(this.isCoupounApplied == true){
      this.popupService.popupMessage = "You have already applied the coupoun"
      input.value = ''
    }else if(input.value == 'save25' && this.Total > 70){
      this.Total = this.Total - this.calculatePercentage(this.Total, 25)
      input.value = ''
      this.popupService.popupMessage = "'SAVE25' coupon is applied successfully 🎁"
      this.isCoupounApplied = true;
    }else if(this.Total == 0 && input.value == ''){
      this.popupService.popupMessage = "Opps...your cart is zero now..Grab few items"
    }else if(input.value != 'save25' || input.value == ''){
      this.popupService.popupMessage = "Coupon is not valid....Use 'SAVE25' for 25% off"
      input.value = ''
    }else if(this.Total < 70){
      this.popupService.popupMessage = "Opps...Total amount should be > 75 to avail this offer"
      input.value = '' 
    }
  }

  proceedToCheckout(){
    if(this.Total>0){
      this.router.navigate(['/food-items/place-order']);
    }else{
      this.popupService.popupMessage = "Opps...your cart is zero now..Grab few items"
    }
  }

  popup() {
    this.popupService.openPopup(PopupComponent, this.popupService.popupMessage);
  }

}

