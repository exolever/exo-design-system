import { Component } from '@angular/core';

@Component({
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {

  certifications = [
    { name: 'ExO Coach', code: 'X'},
    { name: 'ExO Ambassador', code: 'K'},
    { name: 'ExO Workshop Trainer', code: 'T'},
    { name: 'ExO Align Trainer', code: 'I'},
  ]

}
