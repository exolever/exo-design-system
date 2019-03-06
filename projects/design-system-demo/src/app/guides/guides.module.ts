import { NgModule } from '@angular/core';
import { GuidesComponent } from './guides.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

const ROUTES: Routes = [
  {
    path: '',
    component: GuidesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'getting-started' },
      { path: 'getting-started', loadChildren: './getting-started/getting-started.module#GettingStartedModule' },
      { path: 'voice', loadChildren: './voice/voice.module#VoiceModule' },
      { path: 'brand', loadChildren: './brand/brand.module#BrandModule' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  declarations: [
    GuidesComponent,
  ],
})
export class GuidesModule {}
