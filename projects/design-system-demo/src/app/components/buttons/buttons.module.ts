import { NgModule } from '@angular/core';
import { MatIconModule, MatTabsModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExoButtonModule } from '@openexo/design-system';

// Config
import { URLS } from './buttons.config';

// Components
import { ButtonsComponent } from './buttons.component';
import { ButtonExamplesComponent } from './examples/examples.component';
import { OverviewComponent } from './overview/overview.component';
import { MarkdownModule } from 'ngx-markdown';

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
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
    MatIconModule,
    CommonModule,
    MatTabsModule,
  ],
  declarations: [
    ButtonsComponent,
    ButtonExamplesComponent,
    OverviewComponent,
  ],
})
export class ButtonsModule {}
