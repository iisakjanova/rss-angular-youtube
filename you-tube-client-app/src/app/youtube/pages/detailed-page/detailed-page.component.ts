import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeService } from 'src/app/core/services/youtube/youtube.service';

import type { SearchItem } from '../../components/search-results-block/search-item-model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  itemId!: string;

  searchItem: SearchItem | undefined;

  constructor(private router: Router, public youtubeService: YoutubeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.itemId = params['id'];
      this.searchItem = this.youtubeService.searchItems.find((item) => item.id.videoId === this.itemId);

      if (!this.searchItem) {
        this.router.navigate(['/not-found']);
      }
    });
  }
}
