import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { StateOrder } from 'src/app/shared/enums/sate-order.enum';
import { Orders } from 'src/app/shared/models/orders';
import { Btn } from 'src/app/shared/interfaces/btn-i';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
/*   public collection : Orders[];
 */
  public collection$: Observable<Orders[]>;
  public headers: String[];
  public states = Object.values(StateOrder);

  public btnRoute :Btn;
  public btnHref: Btn;
  public btnAction: Btn;

  constructor( private os :OrdersService) { }

  ngOnInit(): void {
     this.btnRoute ={
       label: "add an order",
       route : "add"
     }

     this.btnHref = {
       label: "Go to google",
       href : "https://www.google.com/"
     }

     this.btnAction ={
      label: "Open dialogue",
      action :true
     }

/*
    this.os.collection.subscribe((datas) =>{
     this.collection =datas
       }); */

       this.collection$ = this.os.collection;


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

  public openPopUp(){
    console.log("open POPUP");
  }

}
