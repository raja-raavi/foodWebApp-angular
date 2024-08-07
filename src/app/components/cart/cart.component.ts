import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems: any;

  constructor(private foodListService: FoodListService){

  }

  ngOnInit(){
    this.cartItems = this.foodListService.getSelectedItems();
    console.log('Selected Items in Cart:', this.cartItems);
  }

}
