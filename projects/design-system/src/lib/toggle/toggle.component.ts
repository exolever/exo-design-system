import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

enum TypeAlertEnum {
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

@Component({
  selector: 'exo-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ToggleComponent implements OnInit {

  /**
   * Default value for toggle
   */
  @Input() value = true;

  /**
   * Label before the toggle.
   */
  @Input() label: string;

  /**
   * Emit an event when the user click on a button with action
   */
  @Output() sendAction: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onAction($event) {
    this.sendAction.emit($event);
  }
}
