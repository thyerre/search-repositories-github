import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.sass']
})
export class InputSearchComponent {

  model: string = "";
  @Output() emiterTextInput = new EventEmitter();

  emiterAction(): void {
    this.emiterTextInput.emit(this.model);
  }

}
