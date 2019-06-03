import { Component } from '@angular/core';
import { URLS } from './alerts.config';

@Component({
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent {

  navLinks: { path: string, label: string }[];

  constructor() {
    this.navLinks = [
      { path: URLS.overview, label: 'Overview' },
      { path: URLS.examples, label: 'Examples' },
      { path: URLS.devdocs, label: 'Dev docs' },
    ];
  }
}
