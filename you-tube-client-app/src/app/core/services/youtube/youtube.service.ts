import { Injectable } from '@angular/core';
import { SearchItem } from 'src/app/youtube/components/search-results-block/search-item-model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public searchItems: SearchItem[] = [];

  updateSearchItems(items: SearchItem[]): void {
    this.searchItems = items;
  }
}
