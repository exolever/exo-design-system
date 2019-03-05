import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material';

export const ROUTES: Routes = [
  { path: '', component: ToolbarComponent },
];

@NgModule({
  imports: [
    MatToolbarModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    ToolbarComponent,
  ],
})
export class ToolbarModule {}
