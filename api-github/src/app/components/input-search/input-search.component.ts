import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.sass']
})
export class InputSearchComponent {

  typingTimer: any = null;
  search: string = "";
  @Output() searchChange = new EventEmitter<string>();

  emiterAction(text: string): void {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => this.searchChange.emit(text), 1000);
  }

}
