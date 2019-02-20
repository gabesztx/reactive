import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of, timer } from 'rxjs';
import { switchMap, mergeMap, tap, mapTo, take, map, concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    /*
    const source$ = of(2000, 4000, 1000, 3000);
    const example$ = source$.pipe(
      tap(x => console.log('source values: ', x)),
      mergeMap(val => of(val).pipe(delay(val)))
    );
    // output: 1000 next() 2000 next() 3000 next() 4000 completed()
    */


    const clickEvent$ = fromEvent(document, 'click');
    const source2$ = interval(1000);
    const example$ = clickEvent$.pipe(
      // take(1),
      tap(x => console.log('click')),
      mergeMap(val => source2$.pipe(take(5)))
    );

    const subscribe = example$.subscribe(
      val => {
        console.log('Emit valu: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });


    /*
    const clickEvent$ = fromEvent(document, 'click');
    const source$ = of(2000, 4000, 1000, 3000);
    const example$ = clickEvent$.pipe(
      tap(x => console.log('click')),
      mergeMap(ev => {
        return source$.pipe(
          mergeMap(value => {
            return of(value).pipe(delay(value));
          })
        );
      }),
    );
    */

    /* mergeMap with promise */

    /*const source = of('Source value - ');
    const myPromise = (val) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(`${val} Promise value`);
        }, 3000);
      });
    };
    const example = source.pipe(
      mergeMap(val => {
        return myPromise(val);
      })
    );*/

    /* mergeMap with resultSelector */
    /*const source = of('Hello');
    const myPromise = (val) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(`${val} Promise`);
        });
      });
    };
    const example = source.pipe(
      mergeMap(val => {
        return myPromise(val);
      }, (valueFromSource, valueFromPromise) => {
        return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
      })
    );*/

  }
}


/*
 - when click NOT canceld observable
  - párhuzamosan asyncronba futtatja le a - subscribe / requstet
  - used: amikor nem fontos a visszatérési sorrend ill több kérés esetén nem szaktíja meg a jelenlelegi
  futását
*/
