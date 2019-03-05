import { NgModule } from '@angular/core';
import { GuidesComponent } from './guides.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MatToolbarModule } from '@angular/material';

const guidesRoutes: Routes = [
  {
    path: '',
    component: GuidesComponent,
    children: [],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(guidesRoutes),
    MarkdownModule.forChild(),
    MatToolbarModule,
  ],
  declarations: [
    GuidesComponent,
  ],
})
export class GuidesModule {}
