import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, timer } from 'rxjs';
import { takeUntil, filter, scan, map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    // const interval$ = interval(500);
    // const clicks = fromEvent(document, 'click');
    // const example = interval$.pipe(takeUntil(clicks));


    // const source = interval(1000); // emit value every 1s
    // const timer$ = timer(5000); // after 5 seconds, emit value
    // const example = source.pipe(takeUntil(timer$)); // when timer emits after 5s, complete source

    const source = interval(1000); // emit value every 1s
    const isEven = val => val % 2 === 0; // is number even?
    const evenSource = source.pipe(filter(isEven)); // only allow values that are even

    /*const subscribe = example.subscribe(
      val => {
        /!*if (val === 10) {
          subscribe.unsubscribe();
        }*!/
        console.log('Value: ', `${val}`);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });*/
  }

}
