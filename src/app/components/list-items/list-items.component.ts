import { Component, Input } from '@angular/core';
import { Items } from 'src/app/app-interface';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.sass']
})
export class ListItemsComponent {

  @Input() items: Items[] = [];
  @Input() title: string = "";

}
