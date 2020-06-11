import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/sate-order.enum';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Orders } from 'src/app/shared/models/orders';

@Component({
  selector: 'app-form-add-order',
  templateUrl: './form-add-order.component.html',
  styleUrls: ['./form-add-order.component.scss']
})
export class FormAddOrderComponent implements OnInit {

  @Input() item = new Orders();
  @Output() clicked: EventEmitter<Orders> = new EventEmitter();
  public states = Object.values(StateOrder);
  public form : FormGroup;

  constructor(private fb: FormBuilder){

   }

  ngOnInit(): void {
     this.form = this.fb.group(
       {
        tjmHt: [this.item.tjmHt],
        nbJours: [this.item.nbJours],
         tva: [this.item.tva],
         state: [this.item.state],
         typePresta: [this.item.typePresta],
         client: [this.item.client],
         comment: [this.item.comment],
         id: [this.item.id]
       });
  }

  public onSubmit(){
    this.clicked.emit(this.form.value);
  }


}
