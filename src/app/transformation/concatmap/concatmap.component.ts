import { Component, OnInit } from '@angular/core';

import { fromEvent, interval, of } from 'rxjs';
import { switchMap, take, tap, concatMap, delay, mergeMap, merge } from 'rxjs/operators';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const source$ = of(2000, 4000, 1000, 3000);
    const example$ = source$.pipe(
      tap(x => console.log('source values: ', x)),
      concatMap(val => of(val).pipe(delay(val)))
    );
    const subscribe = example$.subscribe(
      val => {
        console.log('Emitted valu: ', val);
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
 - The order of emission and subscription of inner observables is important
 - Map value from source into inner observable, when complete emit result and move to next
 - Sorrendben futtatje le - subscribe / requstet
 - used: ha fontos a lefutási - visszatérési sorrend
*/



// output: 2000 next() 4000 next() 1000 next() 3000 completed()


/*const clickEvent$ = fromEvent(document, 'click');
const source2$ = interval(1000);
const example$ = clickEvent$.pipe(
  // take(1),
  tap(x => console.log('click')),
  concatMap(val => source2$.pipe(take(5)))
);*/
