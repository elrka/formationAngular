import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directive/state.directive';
import { NbJoursDirective } from './directive/nb-jours.directive';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective, NbJoursDirective],
  imports: [
    CommonModule
  ],
  exports: [BtnComponent, TableLightComponent, TotalPipe, StateDirective,NbJoursDirective]
})
export class SharedModule { }
