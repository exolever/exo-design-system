import { Component } from '@angular/core';
import { ExOSnackbarService } from '../../../../../../design-system/src/lib/snackbar';

@Component({
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {

  selected = 'success';

  constructor(
    public snackBar: ExOSnackbarService
  ) { }

  openSnackBar(message: string, action: string, type: string) {
    if (type === 'success') {
      this.succesExample(message, action);
    }

    if (type === 'info') {
      this.infoExample(message, action);
    }

    if (type === 'warning') {
      this.warningExample(message, action);
    }

    if (type === 'error') {
      this.errorExample(message, action);
    }
  }

  succesExample(message, action) {
    this.snackBar.success(message, action);
  }

  infoExample(message, action) {
    this.snackBar.info(message, action);
  }

  warningExample(message, action) {
    this.snackBar.warning(message, action);
  }

  errorExample(message, action) {
    this.snackBar.error(message, action);
  }

}
