import { Injectable } from '@angular/core';
import { SearchItem } from 'src/app/youtube/components/search-results-block/search-item-model';
import data from 'src/assets/mock-response.json';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  searchItems: SearchItem[] = data.items;
}
