import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { WritingGuidesAreaComponent } from './writing-guides-area.component';

const ROUTES: Routes = [
  { path: '', component: WritingGuidesAreaComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
  declarations: [
    WritingGuidesAreaComponent,
  ],
})
export class WritingGuidesAreaModule { }
