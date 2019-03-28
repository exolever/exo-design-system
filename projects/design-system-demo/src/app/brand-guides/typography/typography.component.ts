import { Component, OnInit } from '@angular/core';
import { URLS } from './typography.config';
import { CustomLink } from '../../shared/interfaces/interfaces';

@Component({
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {

  navLinks: CustomLink[];

  ngOnInit(): void {
    this.navLinks = [
      { href: URLS.overview, copy: 'Overview' },
      { href: URLS.examples, copy: 'Examples' },
    ];
  }

}
