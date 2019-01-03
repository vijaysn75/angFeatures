import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule}from '@angular/router';
import {appRoutes} from './routes';
import { Link1Component } from './link1/link1.component';
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events-list/events-list.component';

import {EventsService} from './Services/events.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Link1Component,
    EventsComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
