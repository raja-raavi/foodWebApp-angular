import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { foodList } from 'src/app/models/food-list';
import { FoodListService } from 'src/app/services/food-list.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
})
export class UpdateItemComponent implements OnInit {
  getAllItems: foodList[];
  selectedItem: foodList;
  selectedItemId: number;
  newData: any;

  constructor(
    private foodListService: FoodListService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public popupService: PopupService
  ) {}

  //getting all Items data from DB
  ngOnInit() {
    this.foodListService.getFoodListData().subscribe((response) => {
      this.getAllItems = response;
    });
  }

  updateButtonClicked(id: any) {
    this.foodListService.getFoodItem(id).subscribe((result) => {
      this.selectedItem = result;
      console.log(this.selectedItem);
      return true;
    });

    //when user clicked update button, capturing the item id
    this.activatedRoute.params.subscribe((data) => {
      this.selectedItemId = data['id'];
      console.log(this.selectedItemId);
    });
  }

  // Method to handle form submission
  updateItemButton(updatedInfo: any) {
    if (
      updatedInfo.value.food_name &&
      updatedInfo.value.food_description &&
      updatedInfo.value.food_price &&
      updatedInfo.value.food_category
    ) {
      const updatedItemDetails = {
        id: this.selectedItem.id,
        food_name: updatedInfo.value.food_name,
        food_image: this.selectedItem.food_image,
        food_price: updatedInfo.value.food_price,
        food_description: updatedInfo.value.food_description,
        food_category: updatedInfo.value.food_category,
        food_quantity: this.selectedItem.food_quantity,
      };

      //posting updated Data to Data Base
      this.foodListService
        .updateFoodItem(this.selectedItemId, updatedItemDetails)
        .subscribe((data) => {
          this.newData = data;
        });

      // Update getAllItems array i.e without refreshing page it will reflect changes
      this.foodListService.getFoodListData().subscribe((response) => {
        this.getAllItems = response;
      });

      updatedInfo.reset();
      this.popupService.popupMessage = 'Item is updated successfully 🙂';
    } else {
      this.popupService.popupMessage = 'Oppss.. Looks like fields are empty 😒';
    }
  }

  navigateBack() {
    this.selectedItem = null;
    this.router.navigate(['/adminDashboard/admin-update-item/0']);

    // Update getAllItems array i.e without refreshing page it will reflect changes
    this.foodListService.getFoodListData().subscribe((response) => {
      this.getAllItems = response;
    });
  }

  showPopup() {
    this.popupService.openPopup(PopupComponent, this.popupService.popupMessage);
  }
}
