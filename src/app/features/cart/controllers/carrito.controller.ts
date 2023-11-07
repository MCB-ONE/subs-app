import { CarritoItem } from 'src/app/core/models/carritoItem.model';
import { AddToCarritoUseCase, RemoveFromCarritoUseCase, CheckoutUseCase } from '../../../core/use-cases/carrito.use-cases';
import { Pedido } from 'src/app/core/models/pedido.model';


export class CarritoController {
  constructor(
    private addToCarritoUseCase: AddToCarritoUseCase,
    private removeFromCarritoUseCase: RemoveFromCarritoUseCase,
    private checkoutUseCase: CheckoutUseCase
  ) {}

  addToCarrito(item: CarritoItem): void {
    this.addToCarritoUseCase.addToCarrito(item);
  }

  removeFromCarrito(itemId: number): void {
    this.removeFromCarritoUseCase.removeFromCarrito(itemId);
  }

  checkout(): Pedido {
    return this.checkoutUseCase.checkout();
  }
}