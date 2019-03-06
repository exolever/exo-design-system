import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ButtonLoadingDirective } from './button-loading.directive';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    ButtonLoadingDirective,
  ],
  exports: [
    ButtonLoadingDirective,
    MatButtonModule,
  ],
})
export class ExoButtonModule {}
