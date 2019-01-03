import { Component, OnInit } from '@angular/core';
import { interval, of, timer } from 'rxjs';
import { take, delay, tap, map, combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-combine-all',
  templateUrl: './combine-all.component.html',
  styleUrls: ['./combine-all.component.scss']
})
export class CombineAllComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    /*const source = interval(1000).pipe(take(2));
    const example = source.pipe(
      map(val => interval(1000)
        .pipe(
          map(i => `Result (${val}): ${i}`),
          take(5)
        )
      )
    );*/

    const source1 = of(1, 2, 3);
    const source2 = interval(1000).pipe(take(3), map(value => value + 1));
    const source3 = of(1, 2, 3).pipe(delay(1000));
    const combined = of(source1, source2, source3).pipe(combineAll());

    const subscribe = combined.subscribe(
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
  emit variable amount of values in a sequence and then emits a complete notification.
*/
