import { Component } from '@angular/core';

@Component({
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {

  loading = false;
  loadingStroked = false;
  loadingRaised = false;

  clicked() {
    console.log('Openexo button clicked');
  }

  isLoading(type) {
    if (type === 'loading') {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    }

    if (type === 'loadingStroked') {
      this.loadingStroked = true;
      setTimeout(() => {
        this.loadingStroked = false;
      }, 1500);
    }

    if (type === 'loadingRaised') {
      this.loadingRaised = true;
      setTimeout(() => {
        this.loadingRaised = false;
      }, 1500);
    }
  }

}
