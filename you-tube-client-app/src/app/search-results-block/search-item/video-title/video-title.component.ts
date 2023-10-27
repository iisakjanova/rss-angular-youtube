import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss'],
})
export class VideoTitleComponent {
  @Input() title!: string;
}
