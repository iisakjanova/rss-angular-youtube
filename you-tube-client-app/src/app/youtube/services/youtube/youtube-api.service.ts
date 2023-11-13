import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { SearchItem } from '../../components/search-results-block/search-item-model';
import { SearchResponse } from '../../components/search-results-block/search-response-model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  search(query: string): Observable<SearchResponse> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '5')
      .set('q', query);

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<SearchResponse>(`${this.apiUrl}/search`, { headers, params }).pipe(
      catchError((error) => {
        console.error('Error fetching search results:', error);
        throw error;
      }),
    );
  }

  getVideoDetails(ids: string[]): Observable<SearchResponse[]> {
    const requests = ids.map((id) => {
      const params = new HttpParams()
        .set('id', id)
        .set('part', 'snippet,statistics')
        .set('key', this.apiKey);

      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this.http.get(`${this.apiUrl}/videos`, { headers, params }).pipe(
        catchError((error) => {
          console.error('Error fetching video details:', error);
          throw error;
        }),
      );
    });

    // Use forkJoin to combine multiple requests into one
    return forkJoin(requests) as Observable<SearchResponse[]>;
  }

  searchAndFetchDetails(query: string): Observable<SearchItem[]> {
    // Combine search and video details requests
    return this.search(query).pipe(
      switchMap((searchResults) => {
        // Extract video IDs from search results
        const videoIds = searchResults.items.map((item: SearchItem) => item.id.videoId);

        // Fetch video details
        return this.getVideoDetails(videoIds).pipe(
          // Combine search results and video details
          map((videoDetails) => searchResults.items.map((searchItem: SearchItem) => {
            // Find the matching video detail based on id
            const matchingVideoDetail = videoDetails.find((videoDetail: any) => videoDetail.items[0].id === searchItem.id.videoId);

            return {
              ...searchItem,
              statistics: matchingVideoDetail ? matchingVideoDetail.items[0].statistics : null,
            } as SearchItem;
          })),
        );
      }),
      catchError((error) => {
        console.error('Error combining search and video details:', error);
        throw error;
      }),
    );
  }
}
