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

    /*const s1$ = timer(1000, 3000)
      .pipe(
        tap(x => console.log('s1$ start')),
      );
    const s2$ = timer(3000, 3000)
      .pipe(
        tap(x => console.log('s2$ start')),
      );
    const s3$ = timer(5000, 3000)
      .pipe(
        tap(x => console.log('s3$ start')),
      );

    // when one timer emits, emit the latest values from each timer as an array
    const source = combineLatest(s1$, s2$, s3$);
    source.subscribe(
      ([s1, s2, s3]) => {
        console.log('Emit', s1, s2, s3);
      }
    );
    // const source = of(s1$, s2$).pipe(combineAll());
    */

    // ------------------------------------------------------------------------

    /*const s1$ = of(1, 2, 3)
      .pipe(
        // tap(x => console.log('s1$ start')),
        // delay(1000),
      );
    const s2$ = of(10, 20, 30)
      .pipe(
        // delay(2000),
      );
    const s3$ = of(100, 200, 300)
      .pipe(
        // delay(3000),
      );

    const source$ = combineLatest(s1$, s2$, s3$)
      .subscribe(
        val => {
          console.log('Emit value: ', val);
        },
        err => {
          console.log('Error: ', err);
        },
        () => {
          console.log('Completed!');
        });*/

    // - mivel LATEST ezért az utolsó s3$ databszám alapján fut le és az előtte lévő souce utolso értékt veszi alapul
    // - ha delay van megvárja az összeset és utána emitál


    // ------------------------------------------------------------------------
    /**
     EXAMPLE:
     **/
    /*const setHtml = (id) => {
      return (val) => {
        return (document.getElementById(id).innerHTML = val);
      };
    };
    const addOneClick$ = (id) => {
      return fromEvent(document.getElementById(id), 'click').pipe(
        // map every click to 1
        mapTo(1),
        // tap(x => console.log(`LOG: Click ${id} button: ${x}`)),
        // startWith(0),
        // keep a running total
        scan((acc, curr) => {
          console.log('acc: ', acc, ' - ', 'acc: ', curr);
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
        // console.log('RETURN', val1, val2);
        return val1 + val2;
      }))
      .subscribe((res) => {
        console.log('EMIT', res);
        // setHtml('total');
        // setHtml(`${res}Total`)
      });*/

  }
}


// const source1$ = of(1, 2, 3).pipe(
//   tap(x => console.log('obs1 start')),
//   delay(1000),
//   // tap(x => console.log('obs1 done')),
// );
// const source2$ = of(10, 20, 30).pipe(
//   tap(x => console.log('obs2 start')),
//   delay(3000),
//   // tap(x => console.log('obs2 done')),
//   // take(1),
// );
// const source3$ = of(100, 200, 300).pipe(
//   tap(x => console.log('obs3 start')),
//   delay(2000),
//   // tap(x => console.log('obs3 done')),
//   // take(1),
// );

// asynchron method
/*   const example$ = of(
     source1$,
     // output: Array[3, 30, 100]
     source2$,
     // output: Array[3, 30, 200]
     // source3$
     // output: Array[3, 30, 300]
   ).pipe(
     combineAll()
   );*/

/*const subscribe = example$.subscribe(
  val => {
    console.log('Emit value: ', val);
  },
  err => {
    console.log('Error: ', err);
  },
  () => {
    console.log('Completed!');
  });*/
/*const timerOne = timer(1000, 4000);
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
  });*/

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



