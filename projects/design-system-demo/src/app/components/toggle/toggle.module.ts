import { NgModule } from '@angular/core';
import { MatIconModule, MatTabsModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

// Config
import { URLS } from './toggle.config';

// Components
import { ToggleComponent } from './toggle.component';
import { ToggleExamplesComponent } from './examples/examples.component';
import { ExoToggleModule } from '@openexo/design-system';

const ROUTES: Routes = [
  {
    path: '',
    component: ToggleComponent,
    children: [
      { path: URLS.examples, component: ToggleExamplesComponent },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
    MatIconModule,
    MatTabsModule,
    ExoToggleModule,
  ],
  declarations: [
    ToggleComponent,
    ToggleExamplesComponent,
  ],
})
export class ToggleModule {}
