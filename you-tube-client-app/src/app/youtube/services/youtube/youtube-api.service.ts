import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';

  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '15')
      .set('q', query);

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.apiUrl, { headers, params });
  }
}
