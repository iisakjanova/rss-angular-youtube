import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent {
  constructor(public filterService: FilterService) {}
}
