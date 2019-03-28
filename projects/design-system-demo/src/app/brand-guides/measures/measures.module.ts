import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MeasuresComponent } from './measures.component';
import { MarkdownModule } from 'ngx-markdown';

const ROUTES: Routes = [
  { path: '', component: MeasuresComponent },
];

@NgModule({
  declarations: [
    MeasuresComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
})
export class MeasuresModule { }
