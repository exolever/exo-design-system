import { Component } from '@angular/core';
import { URLS } from './avatar.config';

@Component({
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {

  navLinks: { path: string, label: string }[];

  constructor() {
    this.navLinks = [
      { path: URLS.overview, label: 'Overview' },
      { path: URLS.examples, label: 'Examples' },
      { path: URLS.devdocs, label: 'Dev docs' },
    ];
  }
}
