import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FontsComponent } from './fonts.component';

const ROUTES: Routes = [
  { path: '', component: FontsComponent },
];

@NgModule({
  declarations: [
    FontsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
})
export class FontsModule { }
