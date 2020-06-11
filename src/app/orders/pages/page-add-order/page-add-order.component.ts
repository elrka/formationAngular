import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Orders } from 'src/app/shared/models/orders';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public addSub: Subscription;
  public title:string;
  public subtitle:string;

  constructor(private os:OrdersService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.title = "Orders";
    this.subtitle = "add an orders";
  }

  public add(item:Orders){
   this.addSub = this.os.add(item).subscribe((result) =>
    {
     // this.router.navigate{['orders']};
     this.router.navigate(['../']), {relativeTo: this.route}
    })
  }

  /* ngOnDestroy(): void{
    if(this.addSub){
      this.addSub.unsubscribe();
    }
  } */

}
