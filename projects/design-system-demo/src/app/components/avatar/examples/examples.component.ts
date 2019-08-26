import { Component } from '@angular/core';

@Component({
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {

  certifications5 = [
    { name: 'ExO Coach', code: 'X' },
    { name: 'ExO Ambassador', code: 'K' },
    { name: 'ExO Trainer', code: 'TR' },
    { name: 'ExO Fundations', code: 'EF' },
  ];

  certifications4 = [
    { name: 'ExO Coach', code: 'X' },
    { name: 'ExO Ambassador', code: 'K' },
    { name: 'ExO Trainer', code: 'TR' },
  ];

  certifications6 = [
    { name: 'ExO Coach', code: 'X' },
    { name: 'ExO Ambassador', code: 'K' },
    { name: 'ExO Trainer', code: 'TR' },
    { name: 'ExO Board Advisor', code: 'BA' },
    { name: 'ExO Consultants', code: 'EC' },
  ];

}
