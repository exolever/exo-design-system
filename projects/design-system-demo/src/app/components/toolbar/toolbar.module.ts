import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { ExoToolbarModule } from '@openexo/design-system';

export const ROUTES: Routes = [
  { path: '', component: ToolbarComponent },
];

@NgModule({
  imports: [
    ExoToolbarModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    ToolbarComponent,
  ],
})
export class ToolbarModule {}
