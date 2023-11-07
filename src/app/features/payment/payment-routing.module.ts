import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';


const routes: Routes = [
  // Otras rutas relacionadas con el módulo "producto"
  { path: 'detalle-pago', component: PaymentDetailComponent },
  // Otras rutas relacionadas con el módulo "producto"
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
