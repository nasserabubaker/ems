import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddEventComponent } from './add-event/add-event.component';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';

import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
