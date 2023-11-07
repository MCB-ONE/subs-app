import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoRoutingModule } from './features/productos/producto-routing.module';
import { PaymentRoutingModule } from './features/payment/payment-routing.module';

const routes: Routes = [
  { path: 'productos', loadChildren: () => import('./features/productos/productos.module').then(m => m.ProductosModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductoRoutingModule,
    PaymentRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
