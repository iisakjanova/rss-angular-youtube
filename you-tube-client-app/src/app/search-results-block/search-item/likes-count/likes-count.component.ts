import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-likes-count',
  templateUrl: './likes-count.component.html',
  styleUrls: ['./likes-count.component.scss'],
})
export class LikesCountComponent {
  @Input() likeCount!: string;
}
