import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandGuidesComponent } from './brand-guides.component';
import { MainLayoutModule } from '../layout/main-layout/main-layout.module';

const ROUTES: Routes = [
  {
    path: '',
    component: BrandGuidesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'brand' },
      { path: 'brand', loadChildren: './brand/brand.module#BrandModule' },
      { path: 'colors', loadChildren: './colors/colors.module#ColorsModule' },
      { path: 'typography', loadChildren: './typography/typography.module#TypographyModule' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MainLayoutModule,
  ],
  declarations: [
    BrandGuidesComponent,
  ],
})
export class BrandGuidesModule { }
