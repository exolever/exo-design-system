import { Component, Input } from '@angular/core';
import { MatToolbar, ThemePalette } from '@angular/material';

@Component({
  selector: 'exo-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ExoToolbarComponent extends MatToolbar {
  @Input()
  color: ThemePalette;
}
