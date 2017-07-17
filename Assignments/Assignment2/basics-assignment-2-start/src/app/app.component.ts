import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  username = '';
  isValidUserName() {
    return this.username !== '';
  }
  addUser() {
    this.users.push(this.username);
    this.username = '';
  }

  clearUsers() {
    this.users = [];
  }
}
