import { Component, OnInit } from '@angular/core';
import { timer, combineLatest, of, fromEvent } from 'rxjs';
import { combineAll, delay, map, tap, take, startWith, mapTo, scan } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const timerOne = timer(1000, 4000);
    const timerTwo = timer(2000, 4000);
    const timerThree = timer(3000, 4000);

    const subscribe = timerTwo.subscribe(
      val => {
        console.log('Emit value: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });

    // const source1$ = of(1, 2, 3);
    // const source2$ = of(10, 20, 30);
    // const source3$ = of(100, 200, 300);

    /*const source1$ = of(1, 2, 3).pipe(
      tap(x => console.log('obs1 start')),
      delay(1000),
      tap(x => console.log('obs1 done')),
      // take(1),
    );
    const source2$ = of(10, 20, 30).pipe(
      tap(x => console.log('obs2 start')),
      delay(4000),
      tap(x => console.log('obs2 done')),
      // take(1),
    );
    const source3$ = of(100, 200, 300, 400).pipe(
      tap(x => console.log('obs3 start')),
      delay(5000),
      tap(x => console.log('obs3 done')),
      // take(1),
    );
    const example$ = combineLatest(source1$, source2$, source3$);
    const subscribe = example$.subscribe(
      val => {
        console.log('Emit value: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });*/


    /*
    const setHtml = (id) => {
      return (val) => {
        return (document.getElementById(id).innerHTML = val);
      };
    };
    const addOneClick$ = (id) => {
      return fromEvent(document.getElementById(id), 'click').pipe(
        // map every click to 1
        tap(x => console.log(`LOG: Click ${id} button`)),
        mapTo(2),
        startWith(0),
        // keep a running total
        scan((acc, curr) => {
          // console.log('acc: ', acc, ' - ', 'acc: ', curr);
          return acc + curr;
        }),
        // tap(x => console.log(`LOG: value: ${x}`)),
        // set HTML for appropriate element
        tap(setHtml(`${id}Total`))
      );
    };
    const combineTotal$ = combineLatest(
      addOneClick$('red'),
      addOneClick$('black'))
      .pipe(map(([val1, val2]) => {
        console.log('RETURN', val1, val2);
        return val1 + val2;
      }))
      .subscribe(setHtml('total'));
      */
  }
}
