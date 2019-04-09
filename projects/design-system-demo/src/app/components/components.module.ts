import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { ExoButtonModule, ExOAvatarModule, ExOSnackbarModule } from '@openexo/design-system';

const ROUTES: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'buttons' },
      { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
      { path: 'avatars', loadChildren: './avatar/avatar.module#AvatarModule' },
      { path: 'snackbar', loadChildren: './snackbar/snackbar.module#SnackbarModule' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatToolbarModule,
    MatSidenavModule,
    ExoButtonModule,
    ExOAvatarModule,
    ExOSnackbarModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [ComponentsComponent],
  exports: [],
})
export class ComponentsModule {}
