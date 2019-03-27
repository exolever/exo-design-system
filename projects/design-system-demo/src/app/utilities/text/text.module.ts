import { NgModule } from '@angular/core';
import { TextComponent } from './text.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

const ROUTES: Routes = [
  { path: '', component: TextComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
  declarations: [
    TextComponent,
  ],
})
export class TextModule {}
