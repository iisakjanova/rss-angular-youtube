import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeService } from 'src/app/core/services/youtube/youtube.service';

import type { SearchItem } from '../../components/search-results-block/search-item-model';
import { YoutubeApiService } from '../../services/youtube/youtube-api.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  itemId!: string;

  searchItem: SearchItem | undefined;

  constructor(
    private router: Router,
    public youtubeService: YoutubeService,
    private route: ActivatedRoute,
    public youtubeApiService: YoutubeApiService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.itemId = params['id'];
      this.searchItem = this.youtubeService.searchItems.find((item) => item.id.videoId === this.itemId);

      if (!this.searchItem) {
        this.router.navigate(['/not-found']);
      } else {
        this.youtubeApiService.getVideoDetails([this.itemId]).subscribe({
          next: (videoDetails) => {
            if (videoDetails.length > 0) {
              const [firstItem] = videoDetails[0].items;
              this.searchItem = firstItem;
            }
          },
          error: (error) => {
            console.error('Error fetching video details:', error);
          },
        });
      }
    });
  }
}
