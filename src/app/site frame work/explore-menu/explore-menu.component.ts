import { Component } from '@angular/core';
import { menuList } from '../../models/menu-list';
import { MenuListService } from '../../services/menu-list.service';

@Component({
  selector: 'app-explore-menu',
  templateUrl: './explore-menu.component.html',
  styleUrls: ['./explore-menu.component.css']
})
export class ExploreMenuComponent {

  menuListResult: menuList[];
  
   constructor(private menuService: MenuListService) {}

  ngOnInit() {
    console.log("hello");
    
    this.menuService.getMenuData().subscribe((response) => {
      this.menuListResult = response;
    });

   }

  setCategory(value:string) {
    console.log(value);
  }
}
