import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ExoToolbarModule } from '@openexo/design-system';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components' },
  { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
  { path: 'guides', loadChildren: './guides/guides.module#GuidesModule' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ExoToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes, { useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
