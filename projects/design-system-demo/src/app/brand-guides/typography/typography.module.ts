import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

// Config
import { URLS } from './typography.config';

// Components
import { TypographyComponent } from './typography.component';
import { ExamplesComponent } from './examples/examples.component';
import { OverviewComponent } from './overview/overview.component';
import { MatButtonModule, MatInputModule, MatTabsModule } from '@angular/material';

const ROUTES: Routes = [
  {
    path: '',
    component: TypographyComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: URLS.overview },
      { path: URLS.overview, component: OverviewComponent },
      { path: URLS.examples, component: ExamplesComponent },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    TypographyComponent,
    ExamplesComponent,
    OverviewComponent,
  ],
})
export class TypographyModule { }
