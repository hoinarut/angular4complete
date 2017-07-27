import { Component, OnInit } from '@angular/core';
import { UsersService } from '../app/users.service';
import { OperationsService } from '../app/operations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: { name: string }[] = [];
  inactiveUsers: { name: string }[] = [];

  constructor(private usersSvc: UsersService, public operationsSvc: OperationsService) { }

  ngOnInit() {
    this.activeUsers = this.usersSvc.activeUsers;
    this.inactiveUsers = this.usersSvc.inactiveUsers;
  }
}
