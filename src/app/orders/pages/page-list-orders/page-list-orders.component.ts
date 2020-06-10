import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Orders } from 'src/app/shared/models/orders';
import { StateOrder } from 'src/app/shared/enums/sate-order.enum';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection : Orders[];
  public headers: String[];
  public states = Object.values(StateOrder);

  constructor( private os :OrdersService) { }

  ngOnInit(): void {
    this.os.collection.subscribe((datas) =>{
     this.collection =datas
       });
    this.headers =[
      "Type",
      "client",
      "Nbjours",
      "Tjm HT",
      "Total TTC",
      "Total HT",
      "State"
    ]
  }


  public changeState(item: Orders, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      // traiter la res de l'api, codes erreur etc...
      item.state = res.state;
    });

  }

}
