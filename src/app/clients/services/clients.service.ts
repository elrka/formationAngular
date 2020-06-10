import { Injectable } from '@angular/core';
import { Clients } from 'src/app/shared/models/clients';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection:Observable<Clients[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Clients[]>(`${this.urlApi}clients`).pipe(
      map((datas) => {
        return datas.map((obj) => {
          return new Clients(obj);
        })
      })
    );
  }

  get collection(): Observable<Clients[]>{
    return this.pCollection;
  }

  set collection(new_collection: Observable<Clients[]>){
    this.pCollection = new_collection;
  }

  public updateItem(item: Clients): Observable<Clients> {
    return this.http.put<Clients>(`${this.urlApi}clients/${item.id}`, item);
  }

  public changeState(item: Clients, state: StateClient): Observable<Clients> {
    const obj = new Clients({...item});
    obj.state = state;
    return this.updateItem(obj);
  }
}
