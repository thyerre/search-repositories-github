import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ValueButton } from 'src/app/app-interface';

@Component({
  selector: 'app-button-search',
  templateUrl: './button-search.component.html',
  styleUrls: ['./button-search.component.sass']
})
export class ButtonSearchComponent {

  @Input() name: string = "";
  @Input() url: string = "";
  @Output() emiterActionButton = new EventEmitter();

  emiterAction(): void {
    const value: ValueButton = {
      url: this.url,
      name: this.name,
    };
    this.emiterActionButton.emit(value);
  }
}
