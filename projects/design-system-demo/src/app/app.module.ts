import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ExoButtonModule } from '@openexo/design-system';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'buttons' },
  { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
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
    RouterModule.forRoot(AppRoutes, { useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
