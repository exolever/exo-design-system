import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

enum ExOAvatarSystemDirectionEnum {
  row = 'row',
  column = 'column',
}

@Component({
  selector: 'exo-avatar-system',
  templateUrl: './avatar-system.component.html',
  styleUrls: ['./avatar-system.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExoAvatarSystemComponent {
  @Input()
  name: string;

  @Input()
  roles: string;

  @Input()
  direction = ExOAvatarSystemDirectionEnum.row;
}
