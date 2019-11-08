import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

type SizeAvatar = 'xs' |  'sm' | 'lg' | 'xl';
type ShapeType = 'circle' | 'rect';
type TooltipPosition = 'left' | 'right' | 'above' | 'below' | 'before' | 'after';

enum SizeAvatarEnum {
  xs = 'xs',
  sm = 'sm',
  lg = 'lg',
  xl = 'xl',
}

enum ShapeEnum {
  circle = 'circle',
  rect = 'rect',
}

interface Certificate {
  code: CertificateEnum;
  name: string;
  humanizedCode?: string; // Review with Ana difference with name
}

enum CertificateEnum {
  FOUNDATION = 'CFO',
  CONSULTANT = 'CCO',
  SPRINT_COACH = 'CSC',
  AMBASSADOR = 'CEA',
  TRAINER = 'CTR',
  BOARD_ADVISOR = 'CBA',
}

@Component({
  selector: 'exo-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExOAvatarComponent {

  /**
   * Number that set the maximum of shown avatars
   */
  @Input()
  maxSetShowed = 1;

  /**
   * Custom array to load.
   * You need to pass a tuple [{src, tooltip}] in array
   */
  @Input()
  imageSet: {src?: string, tooltip?: string, alt?: string}[];

  /**
   * The component has defined 4 sizes by default (xs (24px), sm(48px), lg(96px), xl(144px)), but if you need
   * other sizes you can send as { width: '40px', height: '40px'} and will overwrite the default sizes.
   */
  @Input()
  customizedSize: { width: string; height: string };

  /**
   * By default will use SizeAvatarEnum.sm
   * (xs (24px), sm(48px), lg(96px), xl(144px))
   */
  @Input()
  size: SizeAvatar = SizeAvatarEnum.sm;

  /**
   * Shape of the avatar. By default will be circle.
   */
  @Input()
  shape: ShapeType = ShapeEnum.circle;

  /**
   * Item can be a user or group, etc... If you send a item, you will get the info from alt, src, etc from the item.
   */
  @Input()
  item: any;

  /**
   * Position where the tooltip will show. By default is below.
   */
  @Input()
  tooltipPosition: TooltipPosition = 'below';

  /**
   * Certificates only will work with the standards sizes, so this input can't combine with customizedSize.
   * In the same way, only will work with the default shape (circle).
   */
  @Input()
  certificates: Certificate[];

  /**
   * In other case, will emit an event and the parent will take the control (For example, to show a menu when click)
   */
  @Output()
  onClick = new EventEmitter<boolean>();

  sizeAvatar = SizeAvatarEnum;
  // If we increase a new certificate, we need add the new size of stroke.
  valuesCertification = [
    100, 47, 30, 22, 18, 15,
  ];

  /**
   * Sizes defined in the profile_picture array.
   * @param size Must be xs, sm, lg, xl. If you need other, talk with design.
   */
  static parseSizeToNumber(size: SizeAvatar): number {
    switch (size) {
      case SizeAvatarEnum.xs:
        return 24;
      case SizeAvatarEnum.sm:
        return 48;
      case SizeAvatarEnum.lg:
        return 96;
      case SizeAvatarEnum.xl:
        return 144;
    }
  }

  get imageUrl(): string | undefined {
    if (this.src) {
      return this.src;
    }

    if (this.item && this.item.profilePictures) {
      return this.buildPicture(this.item.profilePictures);
    }

    return undefined;
  }

  buildPicture(profilePictures) {
    const picture = profilePictures.find(
      pic => pic.width === ExOAvatarComponent.parseSizeToNumber(this.size),
    );

    return picture ? picture.url : undefined;
  }

  get imageAlt() {
    if (this.alt) {
      return this.alt;
    }

    if (this.item) {
      this.buildNameItem(this.item);
    }

    return 'Avatar';
  }

  /**
   * Return name, fullName or shortName(in that order) from items to use in the Alt attr from image and the tooltips.
   */
  buildNameItem(item) {
    if (item.name) {
      return this.item.name;
    }

    if (item.fullName) {
      return this.item.fullName;
    }

    if (item.shortName) {
      return this.item.shortName;
    }
  }

  get imageTooltip() {
    if (this.tooltip) {
      return this.tooltip;
    }

    if (this.item) {
      this.buildNameItem(this.item);
    }

    return undefined;
  }

  get certificateTooltip() {
    if (this.certificates && this.certificates.length > 0) {
      return this.certificates.map((certificate: Certificate) => {
        if (certificate.name) {
          return `${certificate.name}`;
        }
        if (certificate.humanizedCode) {
          return `${certificate.humanizedCode}`;
        }
      }).join('\n');
    }
  }

  click(): void {
    this.onClick.emit(true);
  }

}
