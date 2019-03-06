import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule, Routes } from '@angular/router';
import { VoiceComponent } from './voice.component';

const ROUTES: Routes = [
  { path: '', component: VoiceComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
  declarations: [
    VoiceComponent,
  ],
})
export class VoiceModule { }
