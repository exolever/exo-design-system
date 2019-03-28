import { Component, OnInit } from '@angular/core';
import { URLS } from './buttons.config';
import { CustomLink } from '../../shared/interfaces/interfaces';

@Component({
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

  navLinks: CustomLink[];

  ngOnInit(): void {
    this.navLinks = [
      { href: URLS.overview, copy: 'Overview' },
      { href: URLS.examples, copy: 'Examples' },
    ];
  }

}
