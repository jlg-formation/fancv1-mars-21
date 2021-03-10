import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit {
  @Input() toto!: string;
  @Input('appAutofocus') qq!: string;

  constructor(private elt: ElementRef<HTMLElement>) {
    console.log('autofocus instantiated.');
  }
  ngOnInit(): void {
    this.elt.nativeElement.focus();
    console.log('this.toto', this.toto);
    console.log('this.qq', this.qq);
  }
}
