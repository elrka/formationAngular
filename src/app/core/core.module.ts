import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [FooterComponent, HeaderComponent, NavComponent]
})
export class CoreModule { }
