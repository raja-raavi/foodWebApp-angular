import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodListService } from 'src/app/services/food-list.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css'],
})
export class ViewItemComponent {
  getAllItems: any;
  selectedItem: any;
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

  ViewItemButtonClicked(ele) {
    this.foodListService.getFoodItem(ele).subscribe((data) => {
      this.selectedItem = data;
      window.scrollTo(0, 0);
    });
  }

  navigateBack() {
    this.selectedItem = null;
    this.router.navigate(['/adminDashboard/admin-view-item/0']);
  }
}
