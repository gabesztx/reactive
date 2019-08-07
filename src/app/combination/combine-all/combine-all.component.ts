import { Component, OnInit } from '@angular/core';
import { combineLatest, fromEvent, interval, of, timer } from 'rxjs';
import { take, delay, tap, map, combineAll, filter, scan, startWith, mapTo } from 'rxjs/operators';

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
      delay(1000),
      // tap(x => console.log('obs1 done')),
    );
    const source2$ = of(10, 20, 30).pipe(
      tap(x => console.log('obs2 start')),
      delay(3000),
      // tap(x => console.log('obs2 done')),
      // take(1),
    );
    const source3$ = of(100, 200, 300).pipe(
      tap(x => console.log('obs3 start')),
      delay(2000),
      // tap(x => console.log('obs3 done')),
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
    ).pipe(
      combineAll()
    );
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


    /*
    const source1$ = interval(1000).pipe(
      tap(x => console.log('source1$ value: ', x)),
      take(3),
    );
    //  map each emitted value from source to interval observable that takes 5 values
    const source2$ = source1$.pipe(
      map(val => timer(0, 1000)
        .pipe(
          filter(value => value > 0),
          tap(x => console.log('i : ', x)),
          map(i => i),
          take(2))
          // map(i => `Result (${val}): ${i}`),
      )
    );
    const example$ = source2$.pipe(combineAll());
    */

    // trigger button
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
