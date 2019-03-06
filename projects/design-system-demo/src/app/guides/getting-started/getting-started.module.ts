import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { GettingStartedComponent } from './getting-started.component';

const ROUTES: Routes = [
  { path: '', component: GettingStartedComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
  ],
  declarations: [
    GettingStartedComponent,
  ],
})
export class GettingStartedModule { }
