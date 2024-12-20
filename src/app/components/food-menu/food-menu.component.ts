import { AfterContentChecked, Component, OnInit, ViewChild} from '@angular/core';
import { foodList } from '../../models/food-list';
import { ActivatedRoute } from '@angular/router';
import { FoodListService } from '../../services/food-list.service';
import { RegisteredUsersDataService } from 'src/app/services/registered-users-data.service';
import { PopupService } from 'src/app/services/popup.service';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit{

  foodListResult: foodList[];
  foodItemResult: foodList[];
  itemId: number;
  showCounter: boolean[] = [];
  selectedItems: any = {}; // Initialize an empty object to store all selected items

  constructor(private foodListService: FoodListService, private activatedRoute: ActivatedRoute, private regUsersService: RegisteredUsersDataService, public popupService: PopupService) { }

  ngOnInit() {
    

    this.activatedRoute.params.subscribe(data => {
      //console.log(`The id is ${data['id']}`);
      this.itemId = data['id']
    })

    this.foodListService.getFoodListData().subscribe(response => {
      this.foodListResult = response;
    })

    this.foodListService.getFoodItem(this.itemId).subscribe(data => {
      this.foodItemResult = data;
    });
    
  }

  addButtonClicked(i) {
    //checking whether user is loggedin or not
    if (!this.regUsersService.isUserLoggedIn()) {
      this.popupService.popupMessage = "Oops... You’ll need to login to add items to your cart! 😒";
      this.showPopup();
    } else {
      this.showCounter[i] = true;
      this.foodListResult[i].food_quantity = 1;
      this.updateSelectedItems(i);
    }
  }

  decreaseItemCount(index: number) {
    this.foodListResult[index].food_quantity--;
    this.updateSelectedItems(index);
    if (this.foodListResult[index].food_quantity === 0) {
      this.showCounter[index] = false;
    }
  }

  increaseItemCount(index: number) {
    this.foodListResult[index].food_quantity++;
    this.updateSelectedItems(index);
  }

  updateSelectedItems(index: number) {    
    this.selectedItems[this.foodListResult[index].id] = {  // returning an Id which is selected
      ...this.foodListResult[index],  // returning the foodList result which is selected
      quantity: this.foodListResult[index].food_quantity // returning the quantity of the Item which is selecting
    };
     //console.log('Selected Items:', this.selectedItems); 
     this.foodListService.selectedItems = Object.values(this.selectedItems); 
  }

  showPopup(){
    this.popupService.openPopup(PopupComponent, this.popupService.popupMessage);
  }


  // addButtonClicked(i) {
  //   this.showCounter[i] = true;
  //   this.foodListResult[i].food_quantity = 1;
  //   this.foodListService.updateSelectedItems(i, this.foodListResult[i]);
  // }

  // decreaseItemCount(index: number) {
  //   this.foodListResult[index].food_quantity--;
  //   this.foodListService.updateSelectedItems(index, this.foodListResult[index]);
  //   if (this.foodListResult[index].food_quantity === 0) {
  //     this.showCounter[index] = false;
  //   }
  // }

  // increaseItemCount(index: number) {
  //   this.foodListResult[index].food_quantity++;
  //   this.foodListService.updateSelectedItems(index, this.foodListResult[index]);
  // }

}