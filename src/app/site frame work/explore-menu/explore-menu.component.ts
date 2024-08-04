import { Component } from '@angular/core';
import { menuList } from '../../models/menu-list';
import { MenuListService } from '../../services/menu-list.service';
import { FoodListService } from '../../services/food-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { foodList } from '../../models/food-list';

@Component({
  selector: 'app-explore-menu',
  templateUrl: './explore-menu.component.html',
  styleUrls: ['./explore-menu.component.css']
})
export class ExploreMenuComponent {

  menuListResult: menuList[];
  foodListResult: foodList[];
  filteredItems:any;
  userCategory:any;
  selectedIndex: number = -1;
  
   constructor(private menuService: MenuListService, private foodListService: FoodListService, 
              private actiatedRoute: ActivatedRoute, private router: Router) {
    }

  ngOnInit() {
    
    //to get menu list service
    this.menuService.getMenuData().subscribe((response) => {
      this.menuListResult = response;
    });

    this.foodListService.getFoodListData().subscribe(data=>{
      this.foodListResult = data;
    })

    // Get the query parameter
    this.actiatedRoute.queryParams.subscribe(params => {
      this.userCategory = params['category'];
      console.log('Query Parameter:', this.userCategory);
      this.filterFoodList();
    });
   }

   setCategory(value: string) {
    // Update the query parameter
    this.router.navigate([], {
      relativeTo: this.actiatedRoute,
      queryParams: { category: value },
      queryParamsHandling: 'merge'
    });
  }

  filterFoodList() {
    // Filter the food list based on the query parameter
    if (this.userCategory) {
      this.filteredItems = this.foodListResult.filter(item => item.food_category === this.userCategory);
      console.log('Filtered Food List:', this.filteredItems);
    }
  }
   
}
