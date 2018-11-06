import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ShareModule } from '../share/share.module';
import { WebservicesService } from '../webservices.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CustomerComponent],
  imports: [ShareModule,HttpClientModule,
    CommonModule,
    CustomerRoutingModule
  ],
  providers:[WebservicesService,HttpClientModule]
})
export class CustomerModule { }
