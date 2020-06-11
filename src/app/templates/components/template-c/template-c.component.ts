import { Component, OnInit, Input } from '@angular/core';
import { Btn } from 'src/app/shared/interfaces/btn-i';

@Component({
  selector: 'app-template-c',
  templateUrl: './template-c.component.html',
  styleUrls: ['./template-c.component.scss']
})
export class TemplateCComponent implements OnInit {

  constructor() { }

  @Input() title:string;
  public btnHref: Btn;

  ngOnInit(): void {

    this.btnHref = {
      label: "Go to google",
      href : "https://www.google.com/"
    }
  }


}
