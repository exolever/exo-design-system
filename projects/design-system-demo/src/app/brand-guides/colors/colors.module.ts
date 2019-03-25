import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ColorsComponent } from './colors.component';

const ROUTES: Routes = [
  { path: '', component: ColorsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
  declarations: [
    ColorsComponent,
  ],
})
export class ColorsModule { }
