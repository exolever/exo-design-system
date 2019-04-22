import { NgModule } from '@angular/core';
import { MatIconModule, MatTabsModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExoButtonModule } from '@openexo/design-system';

import { MarkdownModule } from 'ngx-markdown';

// Config
import { URLS } from './buttons.config';

// Components
import { ButtonsComponent } from './buttons.component';
import { ButtonExamplesComponent } from './examples/examples.component';
import { OverviewComponent } from './overview/overview.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ButtonsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: URLS.overview },
      { path: URLS.overview, component: OverviewComponent },
      { path: URLS.examples, component: ButtonExamplesComponent },
    ],
  },
];

@NgModule({
  imports: [
    ExoButtonModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
    MatIconModule,
    MatTabsModule,
  ],
  declarations: [
    ButtonsComponent,
    ButtonExamplesComponent,
    OverviewComponent,
  ],
})
export class ButtonsModule {}
