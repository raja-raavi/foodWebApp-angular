import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-confirmed',
  templateUrl: './payment-confirmed.component.html',
  styleUrls: ['./payment-confirmed.component.css']
})
export class PaymentConfirmedComponent {

  transactionId: any;
  paymentMethod: string = "Online Payment"

  constructor(private paymentService: PaymentService, private router: Router){

  }

  ngOnInit(){
   this.transactionId =  this.paymentService.paymentId
  }

  homePage(){
    this.router.navigate([''])
  }
} 
