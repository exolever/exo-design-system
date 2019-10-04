import { Component } from '@angular/core';

@Component({
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ToggleExamplesComponent {
  onAction($event) {
    window.alert(`new state = ${$event.checked}`);
  }
}
