import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, timer, of } from 'rxjs';
import { takeUntil, filter, scan, map, withLatestFrom, tap, take, delay, concatAll, combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /*
    const source$ = interval(1000);
    const clicks$ = fromEvent(document, 'click');
    const example$ = source$.pipe(
      takeUntil(clicks$),
    );
    */

    /*
    const source$ = timer(0, 1000);
    const takeUntilSource$ = timer(5000);
    const example$ = source$.pipe(
      // tap(x => console.log('before val: ', x)),
      takeUntil(sourceUntil$),
      // tap(x => console.log('after val: ', x)),
    );
    */

    // source$ interval loop, then sourceUntil$ will completed
/*
    const source1$ = of(1, 2, 3).pipe(
      tap(x => console.log('obs1')),
      delay(1000),
      tap(x => console.log('obs1 done')),
    );
    const source2$ = of(10, 20, 30).pipe(
      tap(x => console.log('obs2')),
      delay(1000),
      tap(x => console.log('obs2 done')),
      // take(1),
    );
    const source3$ = of(100).pipe(
      tap(x => console.log('obs3')),
      delay(1000),
      tap(x => console.log('obs3 done')),
      // take(1),
    );

    const takeUntilSource$ = of(
      source1$,
      source2$,
      source3$
    ).pipe(
      // tap(x => console.log('value', x)),
      combineAll(),
      // tap(x => console.log('combineAll', x)),
    );*/

    const example$ = interval(1000).pipe(
      takeUntil(timer(3000)),
    );


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


    // const example$ = timer(0, 1000).pipe(
    //   takeUntil(takeUntilSource$),
    // );
  }

}
