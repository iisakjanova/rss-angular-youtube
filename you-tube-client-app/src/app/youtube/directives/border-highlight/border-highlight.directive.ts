import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

import {
  BLUE, GREEN, RED, YELLOW,
} from '../constants/colors-constants';

@Directive({
  selector: '[appBorderHighlight]',
})
export class BorderHighlightDirective implements OnInit {
  @Input() publicationDate!: string;

  private colors = {
    older: RED,
    between1and6Months: YELLOW,
    between7DaysAnd1Month: GREEN,
    newerThan7Days: BLUE,
  };

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setBorderColor();
  }

  private setBorderColor() {
    const currentDate = new Date();
    const parsedPublicationDate = new Date(this.publicationDate);
    const dateDiffInMilliseconds = currentDate.getTime() - parsedPublicationDate.getTime();
    const dateDiffInDays = Math.floor(dateDiffInMilliseconds / (1000 * 60 * 60 * 24));

    let borderColor = '';

    if (dateDiffInDays > 180) {
      borderColor = this.colors.older;
    } else if (dateDiffInDays > 30) {
      borderColor = this.colors.between1and6Months;
    } else if (dateDiffInDays >= 7) {
      borderColor = this.colors.between7DaysAnd1Month;
    } else {
      borderColor = this.colors.newerThan7Days;
    }

    this.el.nativeElement.style.borderBottom = `5px solid ${borderColor}`;
  }
}
