import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { GrammarPunctuationComponent } from './grammar-punctuation.component';

const ROUTES: Routes = [
  { path: '', component: GrammarPunctuationComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
  declarations: [
    GrammarPunctuationComponent,
  ],
})
export class GrammarPunctuationModule { }
