import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ExoButtonModule } from '@openexo/design-system';
import { AppComponent } from './app.component';
import {
  MatIconModule,
  MatListModule,
  MatNativeDateModule,
  MatSidenavModule,
} from '@angular/material';
import { ExoToolbarModule } from '@openexo/design/toolbar';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
  { path: 'toolbar', loadChildren: './toolbar/toolbar.module#ToolbarModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ExoButtonModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ExoToolbarModule,
    RouterModule.forRoot(AppRoutes, { useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
