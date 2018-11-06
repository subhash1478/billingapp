import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class WebservicesService {

  constructor(public http: HttpClient) {


   }

   createInvoice(data) {

    return this.http.post(`${config.apiEndPoint}/api/create-invoice`, data);

  }


  createCustomer(data){
    return this.http.post(`${config.apiEndPoint}/api/create-customer`, data);

  }
}
