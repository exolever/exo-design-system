import { Component } from '@angular/core';

@Component({
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {

  clicked() {
    console.log('Openexo button clicked');
  }

}
