import { Component, Input, OnInit } from '@angular/core';

import type { SearchItemSnippetThumbnail } from '../../search-item-model';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent implements OnInit {
  @Input() data!: SearchItemSnippetThumbnail;

  @Input() alt!: string;

  url!: string;

  ngOnInit() {
    this.url = this.data.url;
  }
}
