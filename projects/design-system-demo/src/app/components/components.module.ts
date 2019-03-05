import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { ExoButtonModule } from '@openexo/design-system';

const componentRoutes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'button-toggle' },
      { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
      { path: 'button-toggle', loadChildren: './button-toggle/button-toggle.module#ButtonToggleModule' },
      { path: 'toolbar', loadChildren: './toolbar/toolbar.module#ToolbarModule' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(componentRoutes),
    MatToolbarModule,
    MatSidenavModule,
    ExoButtonModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [ComponentsComponent],
  exports: [],
})
export class ComponentsModule {}
