import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { EllipsisPipe } from './ellipsis.pipe';



@NgModule({
  declarations: [AutofocusDirective, EllipsisPipe],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, EllipsisPipe]
})
export class WidgetModule { }
