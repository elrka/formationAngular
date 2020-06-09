import { ClientI } from '../interfaces/client-i';



export class Clients implements ClientI{
  state: string;
  tva:number;
  id:number;
  name:string;
  ca:number;
  comment:string

  constructor(obj?: Partial<Clients>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
