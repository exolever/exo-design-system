import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_RIPPLE_GLOBAL_OPTIONS, MatButtonModule, MatIconModule, RippleGlobalOptions } from '@angular/material';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
};

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
  ],
})
export class ExoButtonModule {}
