import { StateOrder } from '../enums/sate-order.enum';

export interface OrderI {
  tjmHt: number;
  nbJours: number;
  tva:number;
  state: StateOrder;
  typePresta:string;
  client:string;
  id:number;
  totalHt():number;
  totalTcc():number;
}
