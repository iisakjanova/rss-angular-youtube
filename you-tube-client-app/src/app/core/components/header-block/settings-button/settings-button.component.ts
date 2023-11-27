import { Component } from '@angular/core';

import { FilterService } from '../../../services/filter/filter.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  constructor(public filterService: FilterService) {}

  onSettingsClick() {
    this.filterService.toggleShowFilters();
  }
}
