import { Component } from '@angular/core';

import { URLS } from './config';

@Component({
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  navLinks: { path: string, label: string }[];

  constructor() {
    this.navLinks = [
      { path: URLS.overview, label: 'Overview' },
      { path: URLS.examples, label: 'Examples' },
    ];
  }

}
