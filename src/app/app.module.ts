import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserAnimationsModule,
    BrowserModule, ShareModule,
    AppRoutingModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
