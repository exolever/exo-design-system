import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { ExoButtonModule } from '../../../../../design-system/src/lib/button';
import { MatMenuModule } from '@angular/material';

export const ROUTES: Routes = [
  { path: '', component: MenuComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ExoButtonModule,
    MatMenuModule,
  ],
  declarations: [
    MenuComponent,
  ],
})
export class MenuModule {}
