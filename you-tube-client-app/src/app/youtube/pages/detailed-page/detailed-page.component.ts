import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import data from '../../../../assets/mock-response.json';
import type { SearchItem } from '../../components/search-results-block/search-item-model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  itemId!: string;

  searchItem: SearchItem | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.itemId = 'YN8zNnV0sK8';
    this.searchItem = data.items.find((item) => item.id === this.itemId);

    if (!this.searchItem) {
      this.router.navigate(['/not-found']);
    }
  }
}
