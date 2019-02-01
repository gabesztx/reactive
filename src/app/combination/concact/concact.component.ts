import { Component, OnInit } from '@angular/core';
import { of, concat as concatObs } from 'rxjs';
import { concat, delay } from 'rxjs/operators';


@Component({
  selector: 'app-concact',
  templateUrl: './concact.component.html',
  styleUrls: ['./concact.component.scss']
})
export class ConcactComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const source1$ = of(1, 2, 3).pipe(delay(1000));
    const source2$ = of(4, 5, 6).pipe(delay(1000));
    const source3$ = of(7, 8, 9).pipe(delay(2000));
    const source4$ = of(10, 11, 12);

    const example$ = concatObs(source1$, source2$, source3$, source4$);
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

// concact observable and step by step subscription
