import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ButtonToggleComponent } from './button-toggle.component';
import { MatIconModule } from '@angular/material';
import { ExoButtonToggleModule } from '@openexo/design-system';

const ROUTES: Routes = [
  { path: '', component: ButtonToggleComponent },
];

@NgModule({
  imports: [
    ExoButtonToggleModule,
    MatIconModule,
    RouterModule.forChild(ROUTES),
    CommonModule,
  ],
  declarations: [
    ButtonToggleComponent,
  ],
})
export class ButtonToggleModule {}
