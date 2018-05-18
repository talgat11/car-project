import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carsfilter',
  pure: false
})
export class CarsfilterPipe  {

  transform(items: any[], filter: object): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.title.indexOf(filter) !== -1);
  }

}
