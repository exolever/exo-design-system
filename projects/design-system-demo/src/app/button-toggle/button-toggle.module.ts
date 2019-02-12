import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExoButtonToggleModule } from '@openexo/design/button-toggle';
import { ButtonToggleComponent } from './button-toggle.component';
import { MatIconModule } from '@angular/material';

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
