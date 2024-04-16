import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(
    arr: any[],
    facultyIndex?: number
  ): any[] {
    if (!arr || arr.length === 0) {
      return [];
    }

    let filteredArr = arr;

    if (facultyIndex !== undefined && facultyIndex !== -1) {
      filteredArr = arr.filter(a => a.facultyId === facultyIndex);
    }

    return filteredArr;
  }

}
