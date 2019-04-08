import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';

import { ExOAvatarComponent } from './avatar.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    ExOAvatarComponent,
  ],
  exports: [
    ExOAvatarComponent,
    MatTooltipModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class ExOAvatarModule {}
