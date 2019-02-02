import { Component, OnInit } from '@angular/core';
import { concat as concatObs, fromEvent, interval, of, timer } from 'rxjs';
import { concat, concatAll, delay, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-concact-all',
  templateUrl: './concact-all.component.html',
  styleUrls: ['./concact-all.component.scss']
})
export class ConcactAllComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /*
    const clicks = fromEvent(document, 'click');
    const source$ = clicks.pipe(
      tap(x => console.log('Click')),
      map(ev => {
        return interval(500).pipe(take(3));
      })
    );
    const example$ = source$.pipe(concatAll());
    */


    /*
    const source = timer(0, 1000);
    const example$ = source.pipe(
      map(val => of(val + 10)),
      concatAll()
    );
    */

    const source1 = of(1).pipe(
      tap(x => console.log('obs1')),
      delay(1000));
    const source2 = of(10).pipe(
      tap(x => console.log('obs2')),
      delay(3000));

    const example$ = of(
      source1,
      source2
      // timer(1000),
      // timer(2000),
      // timer(3000),
    ).pipe(concatAll()); // observable subscribe and next..., observable subscribe and next...

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
  }

}
