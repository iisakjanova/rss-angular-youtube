import { Pipe, PipeTransform } from '@angular/core';

import type { SearchItem } from '../../components/search-results-block/search-item-model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: SearchItem[], direction: 'asc' | 'desc', propertyName: string): SearchItem[] {
    if (!Array.isArray(array)) {
      return array;
    }

    const newArray = [...array];

    return newArray.sort((a, b) => {
      const compareValueA = this.getCompareValue(a, propertyName);
      const compareValueB = this.getCompareValue(b, propertyName);

      if (direction === 'asc') {
        return compareValueA - compareValueB;
      }
      return compareValueB - compareValueA;
    });
  }

  private getCompareValue(item: SearchItem, propertyName: string): number {
    switch (propertyName) {
      case 'date':
        return Date.parse(item.snippet.publishedAt);
      case 'views':
        return Number(item.statistics.viewCount);
      default:
        return 0;
    }
  }
}
