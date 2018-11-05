import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { ShareModule } from '../share/share.module';
import { WebservicesService } from '../webservices.service';


@NgModule({
  imports: [
    CommonModule, ShareModule,
    InvoiceRoutingModule
  ],
  declarations: [InvoiceComponent],
  providers:[WebservicesService]
})
export class InvoiceModule { }
