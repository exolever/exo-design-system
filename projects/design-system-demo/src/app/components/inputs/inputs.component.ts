import { Component, OnInit } from '@angular/core';
import { CustomLink } from '../../shared/interfaces/interfaces';
import { URLS } from './inputs.config';

@Component({
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {

  navLinks: CustomLink[];

  ngOnInit(): void {
    this.navLinks = [
      { href: URLS.overview, copy: 'Overview' },
      { href: URLS.examples, copy: 'Examples' },
    ];
  }

}
