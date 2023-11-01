import { Pipe, PipeTransform } from '@angular/core';
import type { SearchItem } from 'src/app/youtube/components/search-results-block/search-item-model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: SearchItem[], searchTerm: string): SearchItem[] {
    if (!items || !searchTerm) {
      return items;
    }

    const searchTermLower = searchTerm.toLowerCase();
    return items.filter((item) => item.snippet.title.toLowerCase().includes(searchTermLower));
  }
}
