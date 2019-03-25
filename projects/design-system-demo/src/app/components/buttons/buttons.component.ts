import { Component } from '@angular/core';
import { URLS } from './buttons.config';

@Component({
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {

  navLinks: { path: string, label: string }[];

  constructor() {
    this.navLinks = [
      { path: URLS.overview, label: 'Overview' },
      { path: URLS.examples, label: 'Examples' },
    ];
  }
}
