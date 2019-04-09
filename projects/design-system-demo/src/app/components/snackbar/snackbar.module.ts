import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExOSnackbarModule } from '../../../../../design-system/src/lib/snackbar';
import { MarkdownModule } from 'ngx-markdown';

import { URLS } from './config';

import { SnackbarComponent } from './snackbar.component';
import { OverviewComponent } from './overview/overview.component';
import { ExamplesComponent } from './examples/examples.component';

const ROUTES: Routes = [
  {
    path: '',
    component: SnackbarComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: URLS.overview },
      { path: URLS.overview, component: OverviewComponent },
      { path: URLS.examples, component: ExamplesComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    ExOSnackbarModule,
  ],
  declarations: [
    SnackbarComponent,
    OverviewComponent,
    ExamplesComponent,
  ],
})
export class SnackbarModule {}
