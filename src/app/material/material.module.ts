

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, MatNativeDateModule } from '@angular/material';
import {MatButtonModule, MatCheckboxModule, 
  MatToolbarModule, MatChipsModule, MatOptionModule, 
   MatProgressBarModule, MatSliderModule, MatSlideToggleModule, 
   MatMenuModule, MatDialogModule, MatSnackBarModule,
     MatInputModule, MatSidenavModule, MatCardModule, MatIconModule,
      MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [  MatPaginatorModule,  MatTableModule,  MatNativeDateModule,
     MatFormFieldModule,MatAutocompleteModule,MatDatepickerModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule,
     MatChipsModule, MatOptionModule, MatGridListModule,
      MatProgressBarModule, MatSliderModule, MatSlideToggleModule, 
      MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, 
      MatCardModule, MatIconModule, MatRadioModule,
       MatProgressSpinnerModule, MatTabsModule, MatListModule
  ],
 
  exports: [ MatTableModule, MatPaginatorModule,MatAutocompleteModule,MatNativeDateModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule,MatDatepickerModule,
     MatOptionModule,  MatProgressBarModule, MatSliderModule,
      MatSlideToggleModule, MatMenuModule, MatDialogModule, 
      MatSnackBarModule, MatSelectModule, MatInputModule, 
      MatSidenavModule,   MatIconModule, MatRadioModule,
       MatProgressSpinnerModule, MatTabsModule, MatListModule, MatGridListModule, MatFormFieldModule, MatCardModule],
  })
  export class MaterialModule { }