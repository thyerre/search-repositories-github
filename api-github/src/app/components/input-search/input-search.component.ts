import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.sass']
})
export class InputSearchComponent {

  typingTimer: any = null;
  model: string = "";
  @Output() emiterTextInput = new EventEmitter();

  emiterAction(text: string): void {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => this.emiterTextInput.emit(text), 1000);
  }

}
