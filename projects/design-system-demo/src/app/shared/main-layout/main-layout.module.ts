import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    MainLayoutComponent,
  ],
})
export class MainLayoutModule { }
