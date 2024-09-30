import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { foodList } from 'src/app/models/food-list';
import { menuList } from 'src/app/models/menu-list';
import { FoodListService } from 'src/app/services/food-list.service';
import { MenuListService } from 'src/app/services/menu-list.service';

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.css'],
})
export class FilterItemsComponent {
  menuListResult: menuList[];
  foodListResult: foodList[];
  filteredItems: any;
  userCategory: any;
  selectedIndex: number = -1;
  selectedItem: any;

  constructor(
    private menuService: MenuListService,
    private foodListService: FoodListService,
    private actiatedRoute: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    //to get menu list service
    this.menuService.getMenuData().subscribe((response) => {
      this.menuListResult = response;
    });

    this.foodListService.getFoodListData().subscribe((data) => {
      this.foodListResult = data;
    });

    // Get the query parameter
    this.actiatedRoute.queryParams.subscribe((params) => {
      this.userCategory = params['selectedCategory'];
      //console.log('Query Parameter:', this.userCategory);
      this.filterFoodList();
    });
  }

  // Update the query parameter
  setCategory(value: string) {
    this.router.navigate([], {
      relativeTo: this.actiatedRoute,
      queryParams: { selectedCategory: value },
      queryParamsHandling: 'merge',
    });
  }

  // Filter the food list based on the query parameter
  filterFoodList() {
    if (this.userCategory) {
      this.filteredItems = this.foodListResult.filter(
        (item) => item.food_category === this.userCategory
      );
      console.log('Filtered Food List:', this.filteredItems);
      // this.category = this.filteredItems[0].food_category;
    }
  }

  viewButtonClicked(id) {
    // Store the current route with the selected category to navigate back later
    const currentUrl = this.router.url;
    sessionStorage.setItem('previousUrl', currentUrl);

    this.foodListService.getFoodItem(id).subscribe((data) => {
      this.selectedItem = data;
    });
  }

  navigateBack() {
    // Retrieve the previously stored URL from session storage
    const previousUrl = sessionStorage.getItem('previousUrl');
    if (previousUrl) {
      // Navigate back to the stored URL
      this.router.navigateByUrl(previousUrl);
    } else {
      // Fallback to a default route if no previous URL is stored
      this.router.navigate(['/adminDashboard/admin-filter-items']);
    }
    // Clear the selected item to reset the view
    this.selectedItem = null;
  }
}
