import { Component } from '@angular/core';

@Component({
  templateUrl: './brand-guides.component.html',
  styleUrls: ['./brand-guides.component.scss'],
})
export class BrandGuidesComponent {
  links = [
    { href: './brand', copy: 'Brand' },
    { href: './colors', copy: 'Colors' },
    { href: './typography', copy: 'Typography' },
  ];
}
