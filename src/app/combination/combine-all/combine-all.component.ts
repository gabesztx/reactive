import { Component, OnInit } from '@angular/core';
import { interval, of, timer } from 'rxjs';
import { take, delay, tap, map, combineAll, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-combine-all',
  templateUrl: './combine-all.component.html',
  styleUrls: ['./combine-all.component.scss']
})
export class CombineAllComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /*
    const source1 = of(1, 2, 3, 4, 5);
    const source2 = interval(1000).pipe(take(3), map(value => value + 1));
    const source3 = of(1, 2, 3).pipe(delay(1000));
    const example$ = of(source1, source2, source3).pipe(combineAll());
    */

    const source1 = of(1).pipe(
      tap(x => console.log('obs1')),
      delay(1000));
    const source2 = of(10).pipe(
      tap(x => console.log('obs2')),
      delay(3000));

    const example$ = of(source1, source2
      // timer(1000).pipe(tap(x => console.log('obs1'))),
      // timer(2000).pipe(tap(x => console.log('obs2'))),
      // timer(5000).pipe(tap(x => console.log('obs3'))),
      // timer(2000),
      // timer(3000),
    ).pipe(combineAll()); // run all observable and when finished all, subscribe and return (Array)

    const subscribe = example$.subscribe(
      val => {
        console.log('Emit value: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }

}

/*
  emit variable amount of values in a sequence and then emits a complete notification.
*/
