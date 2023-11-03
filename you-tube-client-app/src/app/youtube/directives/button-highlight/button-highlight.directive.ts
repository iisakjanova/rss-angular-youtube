import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

import {
  BLUE, GREEN, RED, YELLOW,
} from '../border-highlight/colors';

@Directive({
  selector: '[appButtonHighlight]',
})
export class ButtonHighlightDirective implements OnInit {
  @Input() publicationDate!: string;

  private colors = {
    older: RED,
    between1and6Months: YELLOW,
    between7DaysAnd1Month: GREEN,
    newerThan7Days: BLUE,
  };

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setButtonColor();
  }

  private setButtonColor() {
    const currentDate = new Date();
    const parsedPublicationDate = new Date(this.publicationDate);
    const dateDiffInMilliseconds = currentDate.getTime() - parsedPublicationDate.getTime();
    const dateDiffInDays = Math.floor(dateDiffInMilliseconds / (1000 * 60 * 60 * 24));

    let buttonColor = '';

    if (dateDiffInDays > 180) {
      buttonColor = this.colors.older;
    } else if (dateDiffInDays > 30) {
      buttonColor = this.colors.between1and6Months;
    } else if (dateDiffInDays >= 7) {
      buttonColor = this.colors.between7DaysAnd1Month;
    } else {
      buttonColor = this.colors.newerThan7Days;
    }

    this.el.nativeElement.style.backgroundColor = `${buttonColor}`;
  }
}
