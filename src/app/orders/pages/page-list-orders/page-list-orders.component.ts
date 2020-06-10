import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Orders } from 'src/app/shared/models/orders';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection : Orders[];
  public headers: String[];
  constructor( private os :OrdersService) { }

  ngOnInit(): void {
    this.os.collection.subscribe((datas) =>{
     this.collection =datas
       });
    this.headers =[
      "type",
      "client",
      "Tj Ht"
    ]
  }

}
