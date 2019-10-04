import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { MainLayoutModule } from '../shared/main-layout/main-layout.module';
import { ExoButtonModule, ExOAvatarModule, ExoAlertModule, ExoToggleModule } from '@openexo/design-system';

const ROUTES: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'buttons' },
      { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
      { path: 'avatars', loadChildren: './avatar/avatar.module#AvatarModule' },
      { path: 'alerts', loadChildren: './alerts/alerts.module#AlertsModule' },
      { path: 'toggle', loadChildren: './toggle/toggle.module#ToggleModule' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MainLayoutModule,
    ExoButtonModule,
    ExOAvatarModule,
    ExoAlertModule,
    ExoToggleModule
  ],
  declarations: [ComponentsComponent],
  exports: [],
})
export class ComponentsModule {}
