import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
} from '@angular/core';
import { ExOAvatarComponent } from '../avatar/avatar.component';

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
  description: string;

  @Input()
  direction = ExOAvatarSystemDirectionEnum.row;

  @ContentChild(ExOAvatarComponent)
  avatar: ExOAvatarComponent;

  @Input()
  truncateName = false;

  @Input()
  truncateDescription = false;

  @Input()
  connected = false;

  get systemTruncate() {
    return (this.truncateName || this.truncateDescription) ? 'text-truncate' : '';
  }
}
