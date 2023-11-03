import { Component, Input } from '@angular/core';

import type { SearchItem } from '../search-results-block/search-item-model';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.scss'],
})
export class DetailedCardComponent {
  @Input() item!: SearchItem | undefined;
}
