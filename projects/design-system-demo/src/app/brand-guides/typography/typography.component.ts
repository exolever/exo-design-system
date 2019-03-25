import { Component, OnInit } from '@angular/core';
import { URLS } from './typography.config';

@Component({
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {

  navLinks: { path: string, label: string }[];

  ngOnInit(): void {
    this.navLinks = [
      { path: URLS.overview, label: 'Overview' },
      { path: URLS.examples, label: 'Examples' },
    ];
  }

}
