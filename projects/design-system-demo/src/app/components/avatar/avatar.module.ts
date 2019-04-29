import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { ExOAvatarModule, ExOAvatarSystemModule } from '@openexo/design-system';
import { MarkdownModule } from 'ngx-markdown';
import { AvatarComponent } from './avatar.component';
import { URLS } from './avatar.config';
import { OverviewComponent } from './overview/overview.component';
import { ExamplesComponent } from './examples/examples.component';
import { DevDocsComponent } from './dev-docs/dev-docs.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AvatarComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: URLS.overview },
      { path: URLS.overview, component: OverviewComponent },
      { path: URLS.examples, component: ExamplesComponent },
      { path: URLS.devdocs, component: DevDocsComponent },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MarkdownModule.forChild(),
    ExOAvatarModule,
    ExOAvatarSystemModule,
    MatTabsModule,
  ],
  declarations: [
    AvatarComponent,
    OverviewComponent,
    ExamplesComponent,
    DevDocsComponent,
  ],
})
export class AvatarModule {}
