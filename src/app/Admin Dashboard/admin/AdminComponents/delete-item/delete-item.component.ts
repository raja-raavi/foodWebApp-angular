import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { foodList } from 'src/app/models/food-list';
import { FoodListService } from 'src/app/services/food-list.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css'],
})
export class DeleteItemComponent {
  getAllItems: foodList[];
  selectedItemId: any;

  constructor(
    private foodListService: FoodListService,
    private router: Router,
    public popupService: PopupService
  ) {}

  //getting all Items data from DB
  ngOnInit() {
    this.foodListService.getFoodListData().subscribe((response) => {
      this.getAllItems = response;
    });
  }

  deleteButtonClicked(id: any) {
    var result = window.confirm('are you sure want to delete!!!');
    if (result == true) {
      this.foodListService.deleteFoodItem(id).subscribe((data) => {
        console.log(data);
      });
    }

    // Immediately remove the deleted item from the local list without refreshing the page
    this.getAllItems = this.getAllItems.filter((item) => item.id !== id); 

    this.router.navigate(['/adminDashboard/admin-delete-item/0']);
  }
}
