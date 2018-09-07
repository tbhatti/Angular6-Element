import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-incrementor-element',
  templateUrl: './incrementor-element.component.html',
  styleUrls: ['./incrementor-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class IncrementorElementComponent implements OnInit {

  @Input()
  set counter(counter: number) {
    this._counter = counter;
  }
  get counter(): number {
    return this._counter;
  }
  _counter = 0;

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.counter++;
  }

  descrease() {
    this.counter--;
  }
}