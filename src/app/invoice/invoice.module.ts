import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { ShareModule } from '../share/share.module';
import { WebservicesService } from '../webservices.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule, ShareModule, HttpClientModule,
    InvoiceRoutingModule
  ],
  declarations: [InvoiceComponent],
  providers: [WebservicesService, HttpClientModule]
})
export class InvoiceModule { }
