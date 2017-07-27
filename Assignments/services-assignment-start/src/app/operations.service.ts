import { Injectable } from '@angular/core';
import { UsersService } from '../app/users.service';

@Injectable()
export class OperationsService {
  inactiveCount: number = 0;
  activeCount: number = 0;

  constructor(private usersSvc: UsersService) {
    this.usersSvc.onStatusChange.subscribe(
      (status: string) => {
        if (status === 'active') {
          this.activeCount++;
        } else {
          this.inactiveCount++;
        }
      }
    )
  }
}
