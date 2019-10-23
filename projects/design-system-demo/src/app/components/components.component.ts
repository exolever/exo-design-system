import { Component } from '@angular/core';
import { CustomLink } from '../shared/interfaces/interfaces';

@Component({
  templateUrl: './components.component.html',
})
export class ComponentsComponent {
  links: CustomLink[] = [
    { href: './buttons', copy: 'Buttons' },
    { href: './avatars', copy: 'Avatars' },
    { href: './alerts', copy: 'Alerts' },
  ];
}
