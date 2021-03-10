import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, length = 10, ellipsis = '...'): string {
    if (value.length > length) {
      return value.substr(0, length) + ellipsis;
    }
    return value;
  }
}
