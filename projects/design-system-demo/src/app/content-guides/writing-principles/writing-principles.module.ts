import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { WritingPrinciplesComponent } from './writing-principles.component';

const ROUTES: Routes = [
  { path: '', component: WritingPrinciplesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
  declarations: [
    WritingPrinciplesComponent,
  ],
})
export class WritingPrinciplesModule { }
