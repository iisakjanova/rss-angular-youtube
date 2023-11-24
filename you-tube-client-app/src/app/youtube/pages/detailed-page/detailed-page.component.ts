import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, switchMap, tap } from 'rxjs';
import { CustomCard } from 'src/app/admin/admin.model';
import { selectCustomCardById, selectItemById } from 'src/app/redux/selectors/admin.selectors';

import type { SearchItem } from '../../components/search-results-block/models/search-item-model';
import { YoutubeApiService } from '../../services/youtube/youtube-api.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  itemId!: string;

  searchItem: SearchItem | undefined;

  customCard: CustomCard | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public youtubeApiService: YoutubeApiService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params) => {
        this.itemId = params['id'];

        // Check if the item exists in the store using selectItemById
        const selectItem$ = this.store.select(selectItemById(this.itemId));

        // Check if the item exists in the store using selectCustomCardById
        const selectCustomCard$ = this.store.select(selectCustomCardById(this.itemId));

        // Combine the results of both selectors
        return combineLatest([selectItem$, selectCustomCard$]).pipe(
          tap(([selectedItem, selectedCustomCard]) => {
            if (!selectedItem && !selectedCustomCard) {
              // If neither item exists in the store, make a request to get details
              this.youtubeApiService.getVideoDetails([this.itemId]).subscribe({
                next: (videoDetails) => {
                  if (videoDetails.length > 0) {
                    const [firstItem] = videoDetails[0].items;
                    this.searchItem = firstItem;
                  }
                },
                error: (error) => {
                  console.error('Error fetching video details:', error);
                  this.router.navigate(['/not-found']);
                },
              });
            } else {
              this.searchItem = selectedItem;
              this.customCard = selectedCustomCard;
            }
          }),
        );
      }),
    ).subscribe();
  }
}
