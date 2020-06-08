import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconDetaleComponent } from './components/icon-detale/icon-detale.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [IconEditComponent, IconDetaleComponent, IconNavComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports :[IconNavComponent, IconEditComponent, IconDetaleComponent]
})
export class IconsModule { }
