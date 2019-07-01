import {
  Directive,
  ElementRef,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Sortable } from '@shopify/draggable';

@Directive({
  selector: '[sortable]'
})
export class SortableDirective implements AfterViewInit {
  @Input()
  data: any[];

  @Output() stop = new EventEmitter();

  sortable: Sortable;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.sortable = new Sortable(this.el.nativeElement, {
      draggable: 'li'
    });

    this.sortable.on('sortable:stop', e => this.handleStop(e));
  }

  handleStop(e) {
    /*console.log("in directive handle stop - this.data: " + this.data);
    console.log("in directive handle stop - this.data: " + this.data[0]);
    console.log("in directive handle stop - this.data: " + this.data.length);

    console.log(e);
    console.log("in directive handle stop: ")*/
    const { newIndex, oldIndex } = e;
    //console.log("HANDLE STOP: " + this.data[oldIndex].name);

    const next = this.data;
    console.log("HANDLE STOP: " + this.data[oldIndex]);
    const moved = next.splice(oldIndex, 1);
    next.splice(newIndex, 0, moved[0]);

    this.stop.emit();
  }
}
