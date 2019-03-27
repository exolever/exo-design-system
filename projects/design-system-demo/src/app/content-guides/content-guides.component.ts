import { Component } from '@angular/core';

@Component({
  templateUrl: './content-guides.component.html',
  styleUrls: ['./content-guides.component.scss'],
})
export class ContentGuidesComponent {
  links = [
    { href: './voice-tone', copy: 'Voice & Tone' },
    { href: './writing-principles', copy: 'Writing Principles' },
    { href: './grammar-punctuation', copy: 'Grammar & Punctuation' },
    { href: './writing-guides-area', copy: 'Writing guides per area' },
    { href: './common-terms', copy: 'Common terms' },
  ];
}
