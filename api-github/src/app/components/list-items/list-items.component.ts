import { Items } from './../../app-interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.sass']
})
export class ListItemsComponent {

  @Input() items: Items[] = [];
  @Input() title: string = "";
}
