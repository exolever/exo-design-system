import { NgModule } from '@angular/core';
import {
  MatButtonToggleModule,
  MatCommonModule,
  MatRippleModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { ExoButtonToggleComponent } from '@openexo/design/button-toggle/button-toggle.component';

@NgModule({
  imports: [
    MatCommonModule,
    MatRippleModule,
    MatButtonToggleModule,
    CommonModule,
  ],
  exports: [
    ExoButtonToggleComponent,
    MatButtonToggleModule,
  ],
  declarations: [
    ExoButtonToggleComponent,
  ],
})
export class ExoButtonToggleModule {}
