import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dislikes-count',
  templateUrl: './dislikes-count.component.html',
  styleUrls: ['./dislikes-count.component.scss'],
})
export class DislikesCountComponent {
  @Input() dislikeCount!: string;
}
