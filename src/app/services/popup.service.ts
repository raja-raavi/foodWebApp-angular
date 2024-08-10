import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  popupMessage: string;
  constructor() { }
  
  private popupSubject = new Subject<any>();

  popup$ = this.popupSubject.asObservable();

  openPopup(component: any, popupMessage:string) {
    this.popupSubject.next([component, this.popupMessage]);
    setTimeout(() => {
      this.closePopup();
    }, 4000); 
  }

  closePopup() {
    this.popupSubject.next(null);
  }
}
