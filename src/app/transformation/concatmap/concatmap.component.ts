import { Component, OnInit } from '@angular/core';

import { interval, of } from 'rxjs';
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

    const source = of(2000, 4000, 1000, 3000);
    // Concact, Merge, Swith Map
    const example = source.pipe(

      tap(x => console.log('Log value: ', x)),
      // switchMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
      // concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
      mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );

    const subscribe = example.subscribe(
      val => {
        console.log('Emitted Valu: ', val);
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

