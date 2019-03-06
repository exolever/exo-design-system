import { AfterViewChecked, Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[exoButtonLoading]',
})
export class ButtonLoadingDirective implements AfterViewChecked, OnInit {

  @Input() isLoading: boolean;

  initialText: string;

  constructor(
    private el: ElementRef,
  ) {}

  ngOnInit(): void {
    this.initialText = this.el.nativeElement.innerText;
  }

  // TODO: CHANGE TEXT FOR SPINNER, TALK WITH DESIGN BEFORE TO KNOW WHAT THEY WANT.
  ngAfterViewChecked(): void {
    if (this.isLoading) {
      this.el.nativeElement.innerText = 'Loading...';
    } else {
      if (this.el.nativeElement.innerText === 'Loading...') {
        this.el.nativeElement.innerText = this.initialText;
      }
    }
    this.el.nativeElement.disabled = this.isLoading;
  }

}
