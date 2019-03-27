import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components' },
  { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
  { path: 'utilities', loadChildren: './utilities/utilities.module#UtilitiesModule' },
  { path: 'brand-guides', loadChildren: './brand-guides/brand-guides.module#BrandGuidesModule' },
  { path: 'content-guides', loadChildren: './content-guides/content-guides.module#ContentGuidesModule' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    RouterModule.forRoot(AppRoutes, { useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
