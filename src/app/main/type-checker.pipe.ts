import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeChecker',
})
export class TypeCheckerPipe implements PipeTransform {
  transform(value: number, type: string): number {
    if (type === 'F') {
      value = (value * 9) / 5 + 32;
    }
    return value;
  }
}
