import { ElementRef } from '@angular/core';

import { ButtonHighlightDirective } from './button-highlight.directive';

describe('ButtonHighlightDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(null); // Mock ElementRef
    const directive = new ButtonHighlightDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
