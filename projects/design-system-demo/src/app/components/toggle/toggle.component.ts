import { Component, OnInit } from '@angular/core';
import { URLS } from './toggle.config';
import { CustomLink } from '../../shared/interfaces/interfaces';

@Component({
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {

  navLinks: CustomLink[];

  ngOnInit(): void {
    this.navLinks = [
      { href: URLS.examples, copy: 'Examples' },
    ];
  }

}
