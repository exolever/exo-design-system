import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { BrandComponent } from './brand.component';

const ROUTES: Routes = [
  { path: '', component: BrandComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
  declarations: [
    BrandComponent,
  ],
})
export class BrandModule { }
