import { User } from './../../app-interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.sass']
})
export class CardUserComponent {

  @Input() user: User = {} as User;

}
