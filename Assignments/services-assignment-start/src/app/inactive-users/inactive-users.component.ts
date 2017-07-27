import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: { name: string }[];

  constructor(private usersSvc: UsersService) { }

  changeStatus(id: number) {
    this.usersSvc.changeUserStatus(id, 'active');
  }
}
