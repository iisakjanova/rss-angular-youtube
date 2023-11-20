import { Component, Input } from '@angular/core';
import { CustomCard } from 'src/app/admin/admin.model';

@Component({
  selector: 'app-detailed-custom-card',
  templateUrl: './detailed-custom-card.component.html',
  styleUrls: ['./detailed-custom-card.component.scss'],
})
export class DetailedCustomCardComponent {
  @Input() item!: CustomCard | undefined;
}
