import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoAvatarSystemComponent } from './avatar-system.component';
import { ExOAvatarModule } from '../avatar/avatar.module';

@NgModule({
  imports: [
    CommonModule,
    ExOAvatarModule,
  ],
  declarations: [
    ExoAvatarSystemComponent,
  ],
  exports: [
    ExoAvatarSystemComponent,
  ],
})
export class ExOAvatarSystemModule {}
