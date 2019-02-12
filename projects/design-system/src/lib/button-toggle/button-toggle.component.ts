import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonToggle, MatButtonToggleAppearance, MatButtonToggleChange, ThemePalette } from '@angular/material';

@Component({
  selector: 'exo-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  exportAs: 'exoButtonToggle',
})
export class ExoButtonToggleComponent extends MatButtonToggle {
  @Input()
  appearance: MatButtonToggleAppearance;

  @Input('aria-label')
  ariaLabel: string;

  @Input('aria-labelledby')
  ariaLabelledby: string | null;

  @Input()
  checked: boolean;

  @Input()
  disableRipple: boolean;

  @Input()
  disabled: boolean;

  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  value: any;

  @Output()
  change: EventEmitter<MatButtonToggleChange>;

  // Custom inputs
  @Input()
  bgColorChecked: ThemePalette = 'primary';

  onChange() {
    this.change.emit();
  }

}
