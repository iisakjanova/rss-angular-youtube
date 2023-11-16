import { Component, Input } from '@angular/core';
import { CustomCard } from 'src/app/admin/admin.model';

import { SearchItem } from '../search-item-model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() item!: SearchItem | null;

  @Input() card!: CustomCard;
}
