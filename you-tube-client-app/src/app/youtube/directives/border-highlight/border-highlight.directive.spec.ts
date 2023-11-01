import { ElementRef } from '@angular/core';

import { BorderHighlightDirective } from './border-highlight.directive';

describe('BorderHighlightDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(null); // Mock ElementRef
    const directive = new BorderHighlightDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
