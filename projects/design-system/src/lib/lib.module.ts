import { NgModule } from '@angular/core';
import { ExOAvatarModule } from './avatar';
import { ExOAvatarSystemModule } from './avatar-system';

@NgModule({
  imports: [
    ExOAvatarModule,
    ExOAvatarSystemModule,
  ],
  exports: [],
})
export class ExOLibModules {}
