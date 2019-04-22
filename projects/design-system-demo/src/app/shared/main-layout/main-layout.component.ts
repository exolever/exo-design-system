import { Component, Input } from '@angular/core';

@Component({
  selector: 'exo-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {

  @Input()
  navList: { href: string, copy: string }[];

}
