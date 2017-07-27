import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class UsersService {
  activeUsers = [
    { name: 'Max' },
    { name: 'Anna' }
  ];
  inactiveUsers = [
    { name: 'Chris' },
    { name: 'Manu' }
  ];
  @Output() onStatusChange = new EventEmitter<string>();

  changeUserStatus(index: number, status: string) {
    switch (status) {
      case 'active':
        this.activeUsers.push(this.inactiveUsers[index]);
        this.inactiveUsers.splice(index, 1);
        break;
      case 'inactive':
        this.inactiveUsers.push(this.activeUsers[index]);
        this.activeUsers.splice(index, 1);
        break;
    }
    this.onStatusChange.emit(status);
  }
}
