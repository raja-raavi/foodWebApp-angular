import { Component, OnInit } from '@angular/core';
import { menuList } from '../../models/menu-list';
import { MenuListService } from '../../services/menu-list.service';
import { RegisteredUsersDataService } from 'src/app/services/registered-users-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userName: any;
  message: any;
  
   constructor(public regUsersService: RegisteredUsersDataService){

   }

   ngOnInit(){
    //getting name form local storage
    this.userName = localStorage.getItem('userName');

    //setting message
    const time = new Date().getHours();   
    this.message = (time >= 0 && time < 12) ? 'Good Morning' : (time >= 12 && time < 16) ? 'Good Afternoon' : 'Good Evening';
       
   }

}
