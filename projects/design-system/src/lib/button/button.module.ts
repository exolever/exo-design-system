import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ExoButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    ExoButtonComponent,
  ],
  exports: [
    ExoButtonComponent,
  ],
})
export class ExoButtonModule {}
