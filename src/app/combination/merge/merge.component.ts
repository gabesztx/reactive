import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, merge } from 'rxjs';
import { map, mapTo, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    //  subscribe value every one seconds
    const first$ = interval(1000).pipe(
      mapTo('First Timer'),
      take(1)
    );
    //  subscribe value every two seconds
    const second$ = interval(2000).pipe(
      mapTo('Second Timer'),
      take(5)
    );

    const example$ = merge(first$, second$).pipe(
      // tap(x => console.log(x))
    );

    // when first$,second$ completed
    // complete()

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


/*
const clicks$ = fromEvent(document, 'click');
const timer$ = interval(1000);
*/

/*
 const source$ = clicks.pipe(
  tap(x => console.log('Click')),
  map(ev => {
    return interval(500).pipe(take(3));
  })
);
*/
