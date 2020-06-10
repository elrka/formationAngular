import { Directive , Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[appNbJours]'
})
export class NbJoursDirective {

 // @Input() appNbJours:number;
  @Input() nbjour:number;
  @Input() seuil:number;
  @HostBinding('class') nomClass: string;

  constructor() { }

  ngOnChanges(){
  //  this.nomClass = this.formatClass(this.appNbJours);

      if (this.nbjour >3) {
        this.nomClass ="nbJour-sup";
      }else{
        this.nomClass ="nbJour-inf";
      }
  }

  private formatClass(nbjour : number): string{
    if (nbjour >3) {
      return "nbJour-sup";
    }else{
      return "nbJour-inf";
    }
  }

}
