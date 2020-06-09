import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Clients } from 'src/app/shared/models/clients';


@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection : Clients[];
  public headers: String[];
  constructor( private os :ClientsService) { }

  ngOnInit(): void {
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


}
