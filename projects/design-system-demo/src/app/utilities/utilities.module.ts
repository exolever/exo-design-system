import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UtilitiesComponent } from './utilities.component';
import { MainLayoutModule } from '../shared/main-layout/main-layout.module';

const ROUTES: Routes = [
  {
    path: '',
    component: UtilitiesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'text' },
      { path: 'text', loadChildren: './text/text.module#TextModule' },
      { path: 'fonts', loadChildren: './fonts/fonts.module#FontsModule' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MainLayoutModule,
  ],
  declarations: [
    UtilitiesComponent,
  ],
})
export class UtilitiesModule { }
