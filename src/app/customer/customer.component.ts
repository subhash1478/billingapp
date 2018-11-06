
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { WebservicesService } from '../webservices.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  form: FormGroup;
  formErrors = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

     addresses: [
      { city: '', country: '' , state: '', zip: '', street: ''}
    ]
  };
  validationMessages = {
    firstName: {
      required: 'firstName is required.',
      },
    lastName: {
      required: 'lastName is required.',
     },
    email: {
      required: 'email is required.',
     },
     phone: {
      required: 'phone is required.',

     },
    addresses: {
      city: {
        required: 'City is required.',
       },
      country: {
        required: 'Country is required.'
      },
      state: {
        required: 'state is required'
      },
      zip: {
        required: 'zip is required'
      },


    }
  };

  constructor(private fb: FormBuilder,public services:WebservicesService) {}

  ngOnInit() {
    // build the data model for our form
    this.buildForm();
  }

  /**
   * build the initial form
   */
  buildForm() {
    // build our form
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],

      addresses: this.fb.array([
        this.createAddress()
      ])
    });

    // watch for changes and validate
    this.form.valueChanges.subscribe(data => this.validateForm());
  }

  /**
   * validate the entire form
   */
  validateForm() {
    for (const field in this.formErrors) {
      // clear that input field errors
      this.formErrors[field] = '';

      // grab an input field by name
      const input = this.form.get(field);

      if (input.invalid && input.dirty) {
        // figure out the type of error
        // loop over the formErrors field names
        // tslint:disable-next-line:forin
        for (const error in input.errors) {
          // assign that type of error message to a variable
          this.formErrors[field] = this.validationMessages[field][error];
        }
      }
    }

    this.validateAddresses();
  }

  /**
   * validate the addresses formarray
   */
  validateAddresses() {
    // grab the addresses formarray
    const addresses = <FormArray>this.form.get('addresses');

    // clear the form errors
    this.formErrors.addresses = [];

    // loop through however many formgroups are in the formarray
    let n = 1;
    while (n <= addresses.length) {

      // add the clear errors back
      this.formErrors.addresses.push({
        city: '',
      country: '',
      zip: '',
      state: '',
      street : '' });

      // grab the specific group (address)
      const address = <FormGroup>addresses.at(n - 1);

      // validate that specific group. loop through the groups controls
      for (const field in address.controls) {
         const input = address.get(field);

         if (input.invalid && input.dirty) {
          // tslint:disable-next-line:forin
          for (const error in input.errors) {
            this.formErrors.addresses[n - 1][field] = this.validationMessages.addresses[field][error];
          }
        }
      }

      n++;
    }
  }

  createAddress() {
    return this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      street: ['', Validators.required],
      country: ['']
    });
  }

  addAddress() {
    const addresses = <FormArray>this.form.get('addresses');
    addresses.push(this.createAddress());
  }

  removeAddress(i) {
    const addresses = <FormArray>this.form.get('addresses');
    addresses.removeAt(i);
  }

  processForm() {
    console.log('processing', this.form.value);


    this.services.createCustomer(this.form.value).subscribe(()=>{

    })
  }

}
