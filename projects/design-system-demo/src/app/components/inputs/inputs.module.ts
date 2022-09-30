import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatIconModule, MatTabsModule, MatInputModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExoButtonModule } from '@openexo/design-system';

import { MarkdownModule } from 'ngx-markdown';

// Config

// Components
import { OverviewComponent } from './overview/overview.component';
import { InputExamplesComponent } from './examples/examples.component';
import { InputsComponent } from './inputs.component';
import {URLS} from './inputs.config';

const ROUTES: Routes = [
  {
    path: '',
    component: InputsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: URLS.overview },
      { path: URLS.overview, component: OverviewComponent },
      { path: URLS.examples, component: InputExamplesComponent },
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
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    InputsComponent,
    InputExamplesComponent,
    OverviewComponent,
  ],
})
export class InputsModule {}
