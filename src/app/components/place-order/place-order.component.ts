import { Component, Input, ViewChildren, AfterViewInit, QueryList, ViewChild } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';
import { PopupService } from '../../services/popup.service';
import { PopupComponent } from '../popup/popup.component';
import { ChangeDetectorRef } from '@angular/core';

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

  //accesing all the data from CartComponent
  receiveCartData($event) {
    this.cartData = $event;
    this.subTotal = this.cartData.subTotal;
    this.deliveryFee = this.cartData.deliveryFee;
    this.Total = this.cartData.Total;
    this.cdRef.detectChanges();
  }

  constructor(private foodListService: FoodListService, public popupService: PopupService, private cdRef: ChangeDetectorRef){
    
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
        console.log(data); 
        addressForm.reset();
      }, error=>{
        this.popupService.popupMessage = "Opps...Something Went Wrong"
      })
      this.popupService.popupMessage = "Your Details are Submitted Successfully"

    }else {
      this.popupService.popupMessage = "Please Fill all the Fields"
      this.isaddressFormSubmitted = false;
    }
       //return this.isaddressFormSubmitted;
  }
  
  proceedToPayment(){    
    if(this.isaddressFormSubmitted){
      this.popupService.popupMessage = "congrats"
    }else{
      this.popupService.popupMessage = "Please add Delivery Info to proceed furtherly..."
    }
  }

  showPopup(){
    this.popupService.openPopup(PopupComponent, this.popupService.popupMessage);
  }
}
