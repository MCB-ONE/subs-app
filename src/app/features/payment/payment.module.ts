import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule desde '@angular/forms'
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';



@NgModule({
  declarations: [
    PaymentFormComponent,
    PaymentDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaymentModule
  ]
})
export class PaymentModule { }
