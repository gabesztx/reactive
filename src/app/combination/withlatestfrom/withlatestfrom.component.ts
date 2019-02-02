import { Component, OnInit } from '@angular/core';

import { fromEvent, interval, of, timer } from 'rxjs';
import { map, tap, delay, withLatestFrom, take } from 'rxjs/operators';

@Component({
  selector: 'app-withlatestfrom',
  templateUrl: './withlatestfrom.component.html',
  styleUrls: ['./withlatestfrom.component.scss']
})
export class WithlatestfromComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /*
    * a click akkor teljesül ha interval emitál
    * */

    const clicks = fromEvent(document, 'click');
    // const timer$ = interval(3000);
    /*const example$ = clicks.pipe(
      tap(x => console.log('CLICK')),
      withLatestFrom(timer$), // when click event trigger get in interval current data
      tap(x => console.log('FROM', x)),
    );*/

    const timer$ = interval(1000);
    const result = clicks.pipe(withLatestFrom(timer$));

    /*const example = secondSource.pipe( // withLatestFrom slower than source
      withLatestFrom(source), // both sources must emit at least 1 value (5s) before emitting
      map(([first, second]) => {
        return `Source (1s): ${first} Latest From (5s): ${second}`;
      })
    );*/

    /*const example = source.pipe(
      withLatestFrom(secondSource),
      map(([first, second]) => {
        return `First Source (5s): ${first} Second Source (1s): ${second}`;
      })
    );*/

    const subscribe = result.subscribe(
      val => {
        console.log('Emit value: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });

    /* const source1$ = of(1, 2).pipe(
       tap(x => console.log('obs1 start')),
       // delay(2000),
       // tap(x => console.log('obs1 done')),
     );
     const source2$ = of('a', 'b').pipe(
       tap(x => console.log('obs2 start')),
       // delay(1000),
       // tap(x => console.log('obs2 done')),
       // take(1),
     );
     const source3$ = of(100).pipe(
       tap(x => console.log('obs3 start')),
       // delay(5000),
       // tap(x => console.log('obs3 done')),
       // take(1),
     );

     // revert combineLatest


     const example$ = source1$.pipe(
       withLatestFrom(source2$),
       map((value) => {
         return value;
       })
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
       });*/
  }

}

/*
* ha az első interval érvényesól emitál és az ő idejében vissza adja a második interval álalti értéket ahol éppen tart
*
* */
