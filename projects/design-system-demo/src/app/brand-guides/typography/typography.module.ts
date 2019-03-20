import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { TypographyComponent } from './typography.component';

const ROUTES: Routes = [
  { path: '', component: TypographyComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
  declarations: [
    TypographyComponent,
  ],
})
export class TypographyModule { }
