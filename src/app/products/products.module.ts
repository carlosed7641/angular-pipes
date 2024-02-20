import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumberPagesComponent } from './pages/number-pages/number-pages.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/canfly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumberPagesComponent,
    UncommonPageComponent,
    OrderComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimengModule
  ]
})
export class ProductsModule { }
