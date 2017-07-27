import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: { name: string }[];

  constructor(private usersSvc: UsersService) { }

  changeStatus(id: number) {
    this.usersSvc.changeUserStatus(id, 'inactive');
  }
}