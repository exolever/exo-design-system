import { Component } from '@angular/core';

@Component({
  templateUrl: './utilities.component.html',
})
export class UtilitiesComponent {
  links = [
    { href: './text', copy: 'Text' },
    { href: './fonts', copy: 'Fonts' },
  ];
}
