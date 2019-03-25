import { Component, OnInit } from '@angular/core';
import { URLS } from './buttons.config';

@Component({
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

  navLinks: { path: string, label: string }[];

  ngOnInit(): void {
    this.navLinks = [
      { path: URLS.overview, label: 'Overview' },
      { path: URLS.examples, label: 'Examples' },
    ];
  }

}
