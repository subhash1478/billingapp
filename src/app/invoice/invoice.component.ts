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

  constructor(public services:WebservicesService,public fb:FormBuilder) { }

  ngOnInit() {
  this.invoiceForm=this.fb.group({
    client:['',Validators.required],
    document_number:['',Validators.required],
    issue_date:['',Validators.required],
    po_number:['',Validators.required],
    po_date:['',Validators.required],
    payment_terms:['',Validators.required],
    due_date:['',Validators.required],
    place_of_supply:['',Validators.required],
    ship_to:['',Validators.required],

    

    description:['',Validators.required],
    uom:['',Validators.required],
    qty:['',Validators.required],
    unit_price:['',Validators.required],
    discount:['',Validators.required],
    tax:['',Validators.required],
    discount_on_all:['',Validators.required],
    shipping_packing_cost:['',Validators.required],
    cess:['',Validators.required],
    reverse_change:['',Validators.required],
    payment:['',Validators.required],
    payment_type:['',Validators.required],
    note:['',Validators.required],
    more_note:['',Validators.required],
    private_node:['',Validators.required],
    amount_paid:['',Validators.required],
    productDetails: this.fb.array([] )
 
  })
   
  }
  addNewProduct() {
    const phone = this.fb.group({ 
      product: [],
      description: [],
      uom:[],
      qty:[],
      unit_price:[],
      tax:[],
      discount:[]
    })
  
    this.phoneForms.push(phone);
  }
  
  get phoneForms() {
    return this.invoiceForm.get('productDetails') as FormArray
  }
  
  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.invoiceForm.value);
  }
}
