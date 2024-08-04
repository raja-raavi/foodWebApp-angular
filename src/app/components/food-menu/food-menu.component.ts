import { Component } from '@angular/core';
import { foodList } from '../../models/food-list';
import { ActivatedRoute } from '@angular/router';
import { FoodListService } from '../../services/food-list.service';


@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent {

  foodListResult: foodList[];
  foodItemResult: foodList[];
  itemId: number;
  showCounter: boolean[] = [];
  selectedItems: any = {}; // Initialize an empty object to store all selected items

  constructor(private foodListService: FoodListService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    

    this.activatedRoute.params.subscribe(data => {
      console.log(`The id is ${data['id']}`);
      this.itemId = data['id']
    })

    this.foodListService.getFoodListData().subscribe(response => {
      this.foodListResult = response;
    })

    this.foodListService.getFoodItem(this.itemId).subscribe(data => {
      this.foodItemResult = data;
    })
  }

  addButtonClicked(i) {
    this.showCounter[i] = true;
    this.foodListResult[i].food_quantity = 1;
    this.updateSelectedItems(i);
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
    this.selectedItems[this.foodListResult[index].id] = {
      ...this.foodListResult[index],
      quantity: this.foodListResult[index].food_quantity
    };
    console.log('Selected Items:', this.selectedItems);
  }

  getSelectedItems() {
    return this.selectedItems; // Return the object containing all selected items
  }

}
