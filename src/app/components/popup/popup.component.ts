import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  couponCode :any;
  constructor(private popupService: PopupService){

  }

  ngOnInit(){
    this.couponCode = this.popupService.popupMessage
  }

  closePopup() {
    this.popupService.closePopup();
  }
}
