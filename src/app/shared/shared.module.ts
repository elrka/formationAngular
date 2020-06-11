import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directive/state.directive';
import { NbJoursDirective } from './directive/nb-jours.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { TemplateAComponent } from '../templates/components/template-a/template-a.component';
import { TemplateBComponent } from '../templates/components/template-b/template-b.component';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective, NbJoursDirective, TableDarkComponent],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule
  ],
  exports: [BtnComponent, TableLightComponent, TotalPipe, StateDirective,NbJoursDirective, TableDarkComponent,TemplateAComponent, TemplateBComponent]
})
export class SharedModule { }
