import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
})
export class FilterInputComponent {
  searchTerm = '';

  @Output() searchValueChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output() inputSubmitted: EventEmitter<string> = new EventEmitter<string>();

  updateSearchTerm() {
    this.searchValueChanged.emit(this.searchTerm);
  }

  onFormSubmit() {
    this.inputSubmitted.emit(this.searchTerm);
  }
}
