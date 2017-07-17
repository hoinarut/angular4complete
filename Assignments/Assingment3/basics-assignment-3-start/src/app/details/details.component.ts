import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  statusClass = 'btn-danger';
  isInfoDisplayed = false;
  displays = [];

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.isInfoDisplayed = !this.isInfoDisplayed;
    this.statusClass = this.isInfoDisplayed ? 'btn-success' : 'btn-danger';
    this.displays.push({
      date: new Date(),
      action: this.isInfoDisplayed ? 'Show' : 'Hide'
    });
  }

  isExceededViewCount(display) {
    return this.displays.indexOf(display) >= 4;
  }
}
