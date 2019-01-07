import { Component, OnInit } from '@angular/core';
import { Observable, interval, from, timer, of, fromEvent } from 'rxjs';
import { map, switchMap, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /*const source = of([0, 1, 2, 3, 4]).pipe(
      tap(x => console.log('of value: ', x)),
      switchMap(val => {
        // console.log(val);
        return from(val).pipe(take(2));
      }),
      tap(x => console.log('from value: ', x)),
    );*/

    const source = timer(0, 5000);
    const example = source.pipe(switchMap(() => interval(1000)));

    /*const source = fromEvent(document, 'click');
    const example = source.pipe(
      // tap(x => console.log('click value: ', x)),
      // switchMap(val => interval(1000))
      switchMap(val => timer(0, 1000)),
      // tap(x => console.log('click value: ', x))
    );*/
    /*
    const character$ = Observable.create(obs => {
      obs.next('A');
      setTimeout(() => obs.next('B'), 200);
      setTimeout(() => obs.complete(), 300);
    });

    const number$ = interval(50).pipe(take(5));
    character$.pipe(
      tap(x => console.log('value from source: ', `${x}`)),
      switchMap(() => number$)
    ).subscribe(
      val => {
        console.log('Emitted Valu: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
      */

    const subscribe = source.subscribe(
      // const subscribe = example.subscribe(
      val => {
        // console.log('Emitted Valu: ', val);
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
 - When click canceld (old) fromEvent observable
 Tip:
 - short-lived streams like for example HTTP Requests, that only emit one value
 - long-lived streams such as for example the ones returned by AngularFire, which is an Angular library that provides some services for interacting with the Firebase real-time database and authentication
 - If you would like more than one inner subscription to be maintained, try mergeMap!
 - This operator is generally considered a safer default to mergeMap!
 - This operator can cancel in-flight network requests!
   - used:
*/


