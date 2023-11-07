import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosDetailComponent } from './productos-detail/productos-detail.component';
import { Routes } from '@angular/router';
import { ProductoRoutingModule } from './producto-routing.module';

const routes: Routes = [
  // Otras rutas relacionadas con el módulo "producto"
  { path: 'producto/:id', component: ProductosDetailComponent },
  // Otras rutas relacionadas con el módulo "producto"
];

@NgModule({
  declarations: [
    ProductosDetailComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductosModule { }
