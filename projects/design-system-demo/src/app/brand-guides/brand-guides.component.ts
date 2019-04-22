import { Component } from '@angular/core';
import { CustomLink } from '../shared/interfaces/interfaces';

@Component({
  templateUrl: './brand-guides.component.html',
})
export class BrandGuidesComponent {
  links: CustomLink[] = [
    { href: './brand', copy: 'Brand' },
    { href: './colors', copy: 'Colors' },
    { href: './typography', copy: 'Typography' },
    { href: './measures', copy: 'Sizes measures' },
  ];
}
