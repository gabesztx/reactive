import { Component, OnInit } from '@angular/core';
import { fromEvent, merge, of } from 'rxjs';
import { filter, map, mapTo, share, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.scss']
})
export class IfelseComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    const click$ = fromEvent(document, 'click').pipe(
      tap(num => console.log('click')),
      map(() => parseInt(`${Math.random() * 10}`, 10)),
      share()
    );

    /* if num > 5 */
    const ifSource$ = click$.pipe(
      filter(num => num > 5),
      tap(num => console.log('Nagyobb')),
    );

    /* else num < 5 */
    const elseSource$ = click$.pipe(
      filter(num => num < 5),
      tap(num => console.log('Kisebb'))
    );
    const example$ = merge(ifSource$, elseSource$);
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
