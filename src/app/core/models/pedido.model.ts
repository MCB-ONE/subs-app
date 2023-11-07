import { CarritoItem } from "./carritoItem.model";

export interface Pedido {
    items: CarritoItem[];
    total: number;
  }