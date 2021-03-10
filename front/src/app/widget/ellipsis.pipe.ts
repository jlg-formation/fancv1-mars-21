import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value.length > 10) {
      return value.substr(0, 10) + '...';
    }
    return value;
  }
}
