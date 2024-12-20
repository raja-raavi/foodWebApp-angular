import { Component, Input, ViewChildren, AfterViewInit, QueryList, ViewChild } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';
import { PopupService } from '../../services/popup.service';
import { PopupComponent } from '../popup/popup.component';
import { ChangeDetectorRef } from '@angular/core';
import { TotalService } from '../../services/total.service';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent  {

  isaddressFormSubmitted: boolean;
  cartData: any;
  subTotal: number = 0;
  deliveryFee: number = 0;
  Total: number = 0;

 
  constructor(private foodListService: FoodListService, public popupService: PopupService, private cdRef: ChangeDetectorRef, private router: Router, private totalService: TotalService){
    
  }

  ngOnInit(){
    this.Total = this.totalService.discountedTotal;
    //passing total to payment page
    this.totalService.placeOrderPageTotal = this.Total
    this.subTotal = this.totalService.finalSubTotal;
    this.deliveryFee = this.totalService.finalDeliveryFee;    
  }

  //capturing the DeliveryInfo Details provided by user
  save(addressForm){
    this.isaddressFormSubmitted = true
    if(addressForm.valid){
      const deliveryInfo = {
        firstName: addressForm.value.firstName,
        lastName: addressForm.value.lastName,
        email: addressForm.value.email,
        street: addressForm.value.street,
        city: addressForm.value.city,
        state: addressForm.value.state,
        zipcode: addressForm.value.zipcode,
        country: addressForm.value.country,
        phone: addressForm.value.phone
      } 
      //posting the deliveryInfo to DB
      this.foodListService.deliveryInformation(deliveryInfo).subscribe(data=>{
        //console.log(data); 
        addressForm.reset();
      }, error=>{
        this.popupService.popupMessage = "Opps...Something Went Wrong"
      })
      this.popupService.popupMessage = "Your Details are Submitted Successfully"

    }else {
      this.popupService.popupMessage = "Please Fill all the Fields"
      this.isaddressFormSubmitted = false;
    }
       return this.isaddressFormSubmitted;
  }
  
  proceedToPayment(){    
    if(this.isaddressFormSubmitted){
      this.popupService.popupMessage = "congrats"
      this.router.navigate(['/food-items/payment'])
    }else{
      this.popupService.popupMessage = "Please add Delivery Info to proceed furtherly..."
    }
  }

  showPopup(){
    this.popupService.openPopup(PopupComponent, this.popupService.popupMessage);
  }
}
