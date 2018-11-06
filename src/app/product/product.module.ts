import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [ShareModule,
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
