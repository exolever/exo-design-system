import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { ExoButtonModule } from '../button/button.module';
import { AlertComponent } from './alert.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    ExoButtonModule,
  ],
  declarations: [AlertComponent],
  exports: [AlertComponent],
})
export class ExoAlertModule { }
