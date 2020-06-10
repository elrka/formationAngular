import { Component, OnInit, Input } from '@angular/core';
import { Orders } from '../../models/orders';
import { Clients } from '../../models/clients';


@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
/*   @Input() collection: Orders[];
 */
  @Input() headers : string;
/*   @Input() collection: Clients[];
 */
@Input() collection: Orders[];
 constructor() { }

  ngOnInit(): void {
  }

}
