import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';
import { TotalService } from '../../services/total.service';



@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
 Total: number = 0;

   @ViewChild('paymentRef', {static:true}) paymentRef!: ElementRef;

  constructor(private router: Router, private totalService: TotalService, private paymentService: PaymentService){
    
  }

ngOnInit() {

    //getting total from cart component
    this.Total = this.totalService.total;
    
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
          }]
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
