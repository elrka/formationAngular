import { OrderI } from '../interfaces/order-i';
import { StateOrder} from '../enums/sate-order.enum';

export class Orders implements OrderI{
  tjmHt = 500;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta: string;
  client: string;
  comment: string;
  id: number;
  constructor(obj?: Partial<Orders>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTcc(): number {
    return this.totalHt() * (1 + this.tva / 100);
  }
}
