import { Component } from '@angular/core';
import { CustomLink } from '../shared/interfaces/interfaces';

@Component({
  templateUrl: './utilities.component.html',
})
export class UtilitiesComponent {
  links: CustomLink[] = [
    { href: './text', copy: 'Text' },
    { href: './fonts', copy: 'Fonts' },
  ];
}
