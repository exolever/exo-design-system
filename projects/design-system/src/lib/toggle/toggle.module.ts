import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material';
import { ToggleComponent } from './toggle.component';

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule,
  ],
  declarations: [ToggleComponent],
  exports: [ToggleComponent],
})
export class ExoToggleModule {}
