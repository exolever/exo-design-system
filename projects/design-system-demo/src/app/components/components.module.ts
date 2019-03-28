import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ExoButtonModule } from '@openexo/design-system';
import { MainLayoutModule } from '../shared/main-layout/main-layout.module';

const ROUTES: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'buttons' },
      { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MainLayoutModule,
    ExoButtonModule,
  ],
  declarations: [ComponentsComponent],
  exports: [],
})
export class ComponentsModule {}
