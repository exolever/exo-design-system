import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

enum TypeAlertEnum {
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

@Component({
  selector: 'exo-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AlertComponent implements OnInit {

  /**
   * Type of alert to show. By default is info type
   */
  @Input() typeAlert = TypeAlertEnum.info;

  /**
   * Message to show inside of alert.
   */
  @Input() message: string;

  /**
   * Indicates if the alert can be closed.
   */
  @Input() isCloseable = false;

  /**
   * Text for the button Close
   */
  @Input() closeButtonText: string;

  /**
   * Text for the button with action
   */
  @Input() actionButtonText: string;

  /**
   * Emit an event when the user click on a button with action
   */
  @Output() sendAction: EventEmitter<any> = new EventEmitter();

  showMessage = true;
  typeAlertEnum = TypeAlertEnum;

  ngOnInit() {
    if (this.isCloseable && !this.closeButtonText) {
      console.error('If the button is closable you need indicates the text for the button in small resolutions');
    }
  }

  /**
   * Action to hide the alert
   */
  onClose() {
    this.showMessage = false;
  }

  onAction() {
    this.sendAction.emit();
  }
}
