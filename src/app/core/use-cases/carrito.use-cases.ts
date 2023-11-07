
import { CarritoItem } from '../models/carritoItem.model';
import { Pedido } from '../models/pedido.model';

export interface AddToCarritoUseCase {
  addToCarrito(item: CarritoItem): void;
}

export interface RemoveFromCarritoUseCase {
  removeFromCarrito(itemId: number): void;
}

export interface CheckoutUseCase {
  checkout(): Pedido;
}
