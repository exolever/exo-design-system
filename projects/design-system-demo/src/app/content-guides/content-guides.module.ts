import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentGuidesComponent } from './content-guides.component';
import { MainLayoutModule } from '../shared/main-layout/main-layout.module';

const ROUTES: Routes = [
  {
    path: '',
    component: ContentGuidesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'writing-principles' },
      { path: 'voice-tone', loadChildren: './voice-tone/voice-tone.module#VoiceToneModule' },
      { path: 'writing-principles',
        loadChildren: './writing-principles/writing-principles.module#WritingPrinciplesModule',
      },
      { path: 'grammar-punctuation',
        loadChildren: './grammar-punctuation/grammar-punctuation.module#GrammarPunctuationModule' },
      { path: 'writing-guides-area',
        loadChildren: './writing-guides-area/writing-guides-area.module#WritingGuidesAreaModule' },
      { path: 'common-terms', loadChildren: './common-terms/common-terms.module#CommonTermsModule' },
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
    ContentGuidesComponent,
  ],
})
export class ContentGuidesModule { }
