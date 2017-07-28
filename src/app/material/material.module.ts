import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdMenuModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
