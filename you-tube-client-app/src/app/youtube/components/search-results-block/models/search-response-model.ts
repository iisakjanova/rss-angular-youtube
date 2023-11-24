import { SearchItem } from './search-item-model';

interface SearchResponsePageInfo {
  totalResults: number,
  resultsPerPage: number,
}

export interface SearchResponse {
  kind: string,
  etag: string,
  pageInfo: SearchResponsePageInfo,
  items: SearchItem[],
}
