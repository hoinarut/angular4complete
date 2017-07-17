import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input('type') type;
  @Input('title') title;
  @Input('message') message;
  @Input('size') size;

  typeCssClass: string;
  sizeCssClass: string;


  constructor() { }

  ngOnInit() {
    this.typeCssClass = 'alert-' + this.type;
    switch (this.size) {
      case 'small':
        this.sizeCssClass = 'col-md-3';
        break;
      case 'mediume':
        this.sizeCssClass = 'col-md-6';
        break;
      case 'large':
        this.sizeCssClass = 'col-md-12';
        break;
    }
  }

}
