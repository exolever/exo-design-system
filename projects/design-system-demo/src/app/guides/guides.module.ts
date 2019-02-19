import { NgModule } from '@angular/core';
import { GuidesComponent } from './guides.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExoToolbarModule } from '@openexo/design-system';

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
    ExoToolbarModule,
  ],
  declarations: [
    GuidesComponent,
  ],
})
export class GuidesModule {}
