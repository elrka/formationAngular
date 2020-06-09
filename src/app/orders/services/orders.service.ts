import { Injectable } from '@angular/core';
import { Orders } from 'src/app/shared/models/orders';
import { map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
