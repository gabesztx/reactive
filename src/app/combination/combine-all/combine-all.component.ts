import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, of, timer } from 'rxjs';
import { take, delay, tap, map, combineAll } from 'rxjs/operators';

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

    const source1$ = of(1, 2, 3).pipe(
      tap(x => console.log('obs1 start')),
      delay(2000),
      tap(x => console.log('obs1 done')),
    );
    const source2$ = of(10, 20, 30).pipe(
      tap(x => console.log('obs2 start')),
      delay(3000),
      tap(x => console.log('obs2 done')),
      // take(1),
    );
    const source3$ = of(100, 200, 300, 400).pipe(
      tap(x => console.log('obs3 start')),
      delay(5000),
      tap(x => console.log('obs3 done')),
      // take(1),
    );

    // asynchron method
    const example$ = of(
      source1$,
      // output: Array[3, 30, 100]
      source2$,
      // output: Array[3, 30, 200]
      source3$
      // output: Array[3, 30, 300]
    ).pipe(combineAll());
    // when source1$, source2$, source3$ loaded then subscribe
    // compelted()

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
