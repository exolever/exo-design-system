import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CommonTermsComponent } from './common-terms.component';

const ROUTES: Routes = [
  { path: '', component: CommonTermsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
  declarations: [
    CommonTermsComponent,
  ],
})
export class CommonTermsModule { }
