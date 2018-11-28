import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatPaginatorModule
  } from "@angular/material";

@NgModule({
  exports:[
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {}
