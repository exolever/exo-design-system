import { NgModule } from '@angular/core';
import { ButtonsComponent } from './buttons.component';
import { ExoButtonModule } from '@openexo/design-system';
import { MatIconModule, MatTabsModule } from "@angular/material";
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
    MatTabsModule
  ],
  declarations: [
    ButtonsComponent,
  ],
})
export class ButtonsModule {}
