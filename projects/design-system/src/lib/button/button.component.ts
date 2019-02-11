import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { MatButton, ThemePalette } from '@angular/material';
import { Platform } from '@angular/cdk/platform';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

export enum ButtonHostAttributes {
  MatButton = 'mat-button',
  MatFlatButton = 'mat-flat-button',
  MatIconButton= 'mat-icon-button',
  MatRaisedButton = 'mat-raised-button',
  MatStrokedButton= 'mat-stroked-button',
  MatMiniFab= 'mat-mini-fab',
  MatFab = 'mat-fab',
}

@Component({
  selector: 'exo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ExoButtonComponent extends MatButton implements OnInit {

  @Input()
  color: ThemePalette = 'primary';
  @Input()
  disableRipple = false;
  @Input()
  disabled = false;
  @Input()
  selector: ButtonHostAttributes = ButtonHostAttributes.MatButton;
  @Input()
  autofocus = false;

  @Output()
  clicked = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

  ngOnInit(): void {
    (this._elementRef.nativeElement.firstElementChild as HTMLElement).classList.remove(ButtonHostAttributes.MatButton);
    (this._elementRef.nativeElement.firstElementChild as HTMLElement).classList.add(this.selector);
  }

}
