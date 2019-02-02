import { Component, OnInit } from '@angular/core';
import { timer, combineLatest, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // const timerOne = timer(1000, 4000);
    // const timerTwo = timer(2000, 4000);
    // const timerThree = timer(3000, 4000);
    // const source1$ = of(1, 2, 3);
    // const source2$ = of(10, 20, 30);
    // const source3$ = of(100, 200, 300);

    const source1$ = of(1, 2, 3);
    const source2$ = of('a', 'b', 'c');
    const source3$ = of(10, 20, 300);
    const example$ = combineLatest(
      source1$,
      source2$,
      source3$,

      // timerOne,
      // timerTwo,
      // timerThree
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
