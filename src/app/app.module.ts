import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "./material/material.module";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { VirtualScrollDemoComponent } from './virtual-scroll-demo/virtual-scroll-demo.component';
import { MatPaginationDemoComponent } from './mat-pagination-demo/mat-pagination-demo.component';

import {MatDemoService} from './mat-demo.service';
import { DemoCardComponent } from './demo-card/demo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollDemoComponent,
    MatPaginationDemoComponent,
    DemoCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [MatDemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
