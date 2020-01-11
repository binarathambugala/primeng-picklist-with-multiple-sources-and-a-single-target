import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {PickListModule} from 'primeng/picklist';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PickListModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
