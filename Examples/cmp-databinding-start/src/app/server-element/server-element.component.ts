import {
  Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit
  , AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output, EventEmitter
} from '@angular/core';
import { Event } from '../app.component';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit
  , AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Output('onEvent') onEvent: EventEmitter<Event> = new EventEmitter<Event>();

  @Input() name: string;
  constructor() {
    this.onEvent.emit(new Event('constructor', new Date()));
  }

  ngOnInit() {
    this.onEvent.emit(new Event('ngOnInit', new Date()));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onEvent.emit(new Event('OnChanges', new Date()));
    console.log(changes);
  }
  ngDoCheck(): void {
    this.onEvent.emit(new Event('DoCheck', new Date()));

  }
  ngOnDestroy(): void {
    this.onEvent.emit(new Event('OnDestroy', new Date()));

  }
  ngAfterViewChecked(): void {
    this.onEvent.emit(new Event('AfterViewChecked', new Date()));

  }
  ngAfterViewInit(): void {
    this.onEvent.emit(new Event('AfterViewInit', new Date()));

  }
  ngAfterContentChecked(): void {
    this.onEvent.emit(new Event('AfterContentChecked', new Date()));

  }
  ngAfterContentInit(): void {
    this.onEvent.emit(new Event('AfterContentInit', new Date()));
  }
}
