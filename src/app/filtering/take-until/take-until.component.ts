import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, timer, of } from 'rxjs';
import { takeUntil, filter, scan, map, withLatestFrom, tap, take } from 'rxjs/operators';

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

     const source$ = timer(0, 1000);
     const sourceUntil$ = timer(5000);
     const example$ = source$.pipe(
       // tap(x => console.log('before val: ', x)),
       takeUntil(sourceUntil$),
       // tap(x => console.log('after val: ', x)),
     );
     // source source$ interval loop, then sourceUntil$ will completed

    const subscribe = example$.subscribe(
      val => {
        console.log('Emit value: ', `${val}`);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }

}
