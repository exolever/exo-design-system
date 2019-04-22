import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { MainLayoutModule } from '../shared/main-layout/main-layout.module';
import { ExoButtonModule, ExOAvatarModule } from '@openexo/design-system';

const ROUTES: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'buttons' },
      { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
      { path: 'avatars', loadChildren: './avatar/avatar.module#AvatarModule' },
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
  ],
  declarations: [ComponentsComponent],
  exports: [],
})
export class ComponentsModule {}
