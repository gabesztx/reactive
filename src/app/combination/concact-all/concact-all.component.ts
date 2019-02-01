import { Component, OnInit } from '@angular/core';
import { concat as concatObs, fromEvent, interval, of, timer } from 'rxjs';
import { concat, concatAll, delay, map, take } from 'rxjs/operators';

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
    const higherOrder$ = clicks.pipe(
      map(ev => {
        console.log('CLICK', ev);
        return interval(1000).pipe(take(4));
      })
    );
    const firstOrder = higherOrder$.pipe(concatAll())
    ;*/

    const source = timer(0, 1000);
    const example$ = source.pipe(
      map(val => of(val + 10)), // return observable and subscribe
      concatAll()
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
      });
  }

}
