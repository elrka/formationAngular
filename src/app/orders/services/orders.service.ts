import { Injectable } from '@angular/core';
import { Orders } from 'src/app/shared/models/orders';
import { map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/shared/enums/sate-order.enum';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection:Observable<Orders[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Orders[]>(`${this.urlApi}orders`).pipe(
      map((datas) => {
        return datas.map((obj) => {
          return new Orders(obj);
        })
      })
    );
  }

  get collection(): Observable<Orders[]>{
    return this.pCollection;
  }

  set collection(new_collection: Observable<Orders[]>){
    this.pCollection = new_collection;
  }


//update item
  public updateItem(item: Orders): Observable<Orders> {
    return this.http.put<Orders>(`${this.urlApi}orders/${item.id}`, item);
  }

    // change item state in collection

    public changeState(item: Orders, state: StateOrder): Observable<Orders> {
      const obj = new Orders({...item});
      obj.state = state;
      return this.updateItem(obj);
    }


}




