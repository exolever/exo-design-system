import { Component } from '@angular/core';
import { CustomLink } from '../shared/interfaces/interfaces';

@Component({
  templateUrl: './content-guides.component.html',
})
export class ContentGuidesComponent {
  links: CustomLink[] = [
    { href: './voice-tone', copy: 'Voice & Tone' },
    { href: './writing-principles', copy: 'Writing Principles' },
    { href: './grammar-punctuation', copy: 'Grammar & Punctuation' },
    { href: './writing-guides-area', copy: 'Writing guides per area' },
    { href: './common-terms', copy: 'Common terms' },
  ];
}
