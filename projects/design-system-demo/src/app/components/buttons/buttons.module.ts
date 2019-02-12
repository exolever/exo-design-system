import { NgModule } from '@angular/core';
import { ButtonsComponent } from './buttons.component';
import { ExoButtonModule } from '../../../../../design-system/src/lib/button';
import { MatIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
  { path: '', component: ButtonsComponent },
];

@NgModule({
  imports: [
    ExoButtonModule,
    MatIconModule,
    RouterModule.forChild(ROUTES),
    CommonModule,
  ],
  declarations: [
    ButtonsComponent,
  ],
})
export class ButtonsModule {}
