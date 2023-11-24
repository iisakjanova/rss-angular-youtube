import { Component, Input } from '@angular/core';

import type { SearchItemStatistics } from '../../models/search-item-model';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss'],
})
export class CountersComponent {
  @Input() statistics!: SearchItemStatistics;
}
