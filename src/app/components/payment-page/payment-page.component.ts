import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';
import { TotalService } from '../../services/total.service';
import { PlaceOrderComponent } from '../place-order/place-order.component';



@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  Total: number;
  showPreloader: boolean = true;
 
   @ViewChild('paymentRef', {static:true}) paymentRef!: ElementRef;

  constructor(private router: Router, private totalService: TotalService, private paymentService: PaymentService, private cdr: ChangeDetectorRef){
    
  }

ngOnInit() {

  setTimeout(() => {
    this.showPreloader = false;
    this.cdr.detectChanges();
  }, 3000);

  //getting total from place order page
  this.Total = this.totalService.placeOrderPageTotal;

    (window as any).paypal.Buttons({
      style: {
        layout : 'horizontal',
        color: 'blue',
        shape: 'rect',
        label: 'paypal'
      },
      createOrder: (data: any, actions: any)=>{
        return actions.order.create({
          purchase_units: [{
            amount: {
              value:this.Total.toString(),
              currency_code: 'USD'
            }
          }],
        })
      },
      onApprove: (data: any, actions: any)=>{
        return actions.order.capture().then((details: any)=>{
          if(details.status === 'COMPLETED'){
            this.paymentService.paymentId = details.id;
            this.router.navigate(['/food-items/payment-confimed'])
          } 
        })
      },
      onError: (error: any) =>{
        console.log(error); 
      }
    }).render(this.paymentRef.nativeElement)
     
  }

  cancel(){
    this.router.navigate(['/food-items/food-menu'])
  }  
}
