import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { MatIconModule, MatListModule, MatSidenavModule } from '@angular/material';
import { ExoToolbarModule } from '@openexo/design/toolbar';
import { ExoButtonModule } from '@openexo/design/button';

const componentRoutes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'button-toggle' },
      { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
      { path: 'button-toggle', loadChildren: './button-toggle/button-toggle.module#ButtonToggleModule' },
      { path: 'toolbar', loadChildren: './toolbar/toolbar.module#ToolbarModule' },
      { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(componentRoutes),
    MatSidenavModule,
    ExoToolbarModule,
    ExoButtonModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [ComponentsComponent],
  exports: [],
})
export class ComponentsModule {}
