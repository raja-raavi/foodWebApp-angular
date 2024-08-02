import { Component } from '@angular/core';
import { foodList } from '../../models/food-list';
import { TopDishesListService } from '../../services/top-dishes-list.service';
import { topDishes } from 'src/app/models/top_dishes_list';
@Component({
  selector: 'app-top-dishes',
  templateUrl: './top-dishes.component.html',
  styleUrls: ['./top-dishes.component.css']
})
export class TopDishesComponent {

  topDishesResult: topDishes[];
  itemCount:number = 0

  constructor(private topDishesService: TopDishesListService) {

  }

  ngOnInit(){
    this.topDishesService.getTopDishesData().subscribe(response=>{
      this.topDishesResult = response;
    })
  }
}


