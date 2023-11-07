import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosDetailComponent } from './productos-detail/productos-detail.component';

const routes: Routes = [
  // Otras rutas relacionadas con el módulo "producto"
  { path: 'productos/:id', component: ProductosDetailComponent },
  // Otras rutas relacionadas con el módulo "producto"
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
