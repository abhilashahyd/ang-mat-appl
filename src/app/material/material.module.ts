import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatIconModule,
  MatToolbarModule,
  MatSelectModule,
  MatDialogModule,
  MatPaginatorModule,
  MatRadioModule,
  MatAutocompleteModule
} from "@angular/material";

@NgModule({
  exports:[
    MatCardModule,
    // BrowserAnimationsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatRadioModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {}
