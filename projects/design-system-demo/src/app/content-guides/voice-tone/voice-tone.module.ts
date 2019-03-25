import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { VoiceToneComponent } from './voice-tone.component';

const ROUTES: Routes = [
  { path: '', component: VoiceToneComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
  declarations: [
    VoiceToneComponent,
  ],
})
export class VoiceToneModule { }
