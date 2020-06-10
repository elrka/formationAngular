import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Clients } from 'src/app/shared/models/clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Btn } from 'src/app/shared/interfaces/btn-i';


@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection : Clients[];
  public headers: String[];
  public states = Object.values(StateClient);

  public btnRoute :Btn;
  public btnHref: Btn;
  public btnAction: Btn;


  constructor( private os :ClientsService) { }

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



    this.os.collection.subscribe((datas) =>{
      this.collection =datas
      });
  this.headers =[
    "state",
    "tva",
    "id",
    "name",
    "ca",
    "comment"
  ]
}

public changeState(item: Clients, event) {
  this.os.changeState(item, event.target.value).subscribe((res) => {
    // traiter la res de l'api, codes erreur etc...
    item.state = res.state;
  });

}


}
