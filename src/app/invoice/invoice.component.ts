import { Component, OnInit } from '@angular/core';
import { WebservicesService } from '../webservices.service';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';



 @Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceForm: FormGroup;

  constructor(public services: WebservicesService, public fb: FormBuilder) { }

  ngOnInit() {
  this.invoiceForm = this.fb.group({
    client: ['', Validators.required],
    documentNumber: ['', Validators.required],
    issueDate: ['', Validators.required],
    poNumber: ['', Validators.required],
    poDate: ['', Validators.required],
    paymentTerms: ['', Validators.required],
    dueDate: ['', Validators.required],
    placeOfSupply: ['', Validators.required],
    shipTo: ['', Validators.required],
    description: ['', Validators.required],
    uom: ['', Validators.required],
    qty: ['', Validators.required],
    unitPrice: ['', Validators.required],
    discount: ['', Validators.required],
    tax: ['', Validators.required],
    discountOnAll: ['', Validators.required],
    shippingPackingCost: ['', Validators.required],
    cess: ['', Validators.required],
    reverseChange: ['', Validators.required],
    payment: ['', Validators.required],
    paymentType: ['', Validators.required],
    note: ['', Validators.required],
    moreNote: ['', Validators.required],
    privateNote: ['', Validators.required],
    amountPaid: ['', Validators.required],
    productDetails: this.fb.array([] )

  });

  }
  addNewProduct() {
    const phone = this.fb.group({
      product: [],
      description: [],
      uom: [],
      qty: [],
      unitPrice: [],
      tax: [],
      discount: []
    });

    this.phoneForms.push(phone);
  }

  get phoneForms() {
    return this.invoiceForm.get('productDetails') as FormArray;
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.invoiceForm.value);

    this.services.createInvoice(this.invoiceForm.value).subscribe((response) => {
console.log(response);

    }, (error) => {

      console.log(error);

    });
  }
}
