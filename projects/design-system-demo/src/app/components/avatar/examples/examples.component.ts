import { Component } from '@angular/core';

@Component({
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {

  certifications4 = [
    { name: 'ExO Coach', code: 'X' },
    { name: 'ExO Ambassador', code: 'K' },
    { name: 'ExO Workshop Trainer', code: 'T' },
    { name: 'ExO Align Trainer', code: 'I' },
  ];

  certifications3 = [
    { name: 'ExO Coach', code: 'X' },
    { name: 'ExO Ambassador', code: 'K' },
    { name: 'ExO Workshop Trainer', code: 'T' },
  ];

  certifications2 = [
    { name: 'ExO Coach', code: 'X' },
    { name: 'ExO Ambassador', code: 'K' },
  ];

  certifications1 = [
    { name: 'ExO Coach', code: 'X' },
  ];
}
