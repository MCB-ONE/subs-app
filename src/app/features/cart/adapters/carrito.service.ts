import { Injectable } from '@angular/core';
import { CarritoItem} from '../../../core/models/carritoItem.model';
import { Pedido } from '../../../core/models/pedido.model';
import { AddToCarritoUseCase, RemoveFromCarritoUseCase, CheckoutUseCase } from '../../../core/use-cases/carrito.use-cases';

@Injectable()
export class CarritoService implements AddToCarritoUseCase, RemoveFromCarritoUseCase, CheckoutUseCase {

  private carritoItems: CarritoItem[] = [];

  addToCarrito(item: CarritoItem): void {
    this.carritoItems.push(item);
  }

  removeFromCarrito(itemId: number): void {
    this.carritoItems = this.carritoItems.filter((item) => item.producto.id !== itemId);
  }

  checkout(): Pedido {
    const total = this.carritoItems.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
    return { items: this.carritoItems, total };
  }
}