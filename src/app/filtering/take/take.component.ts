import { Component, OnInit } from '@angular/core';
import { of, from, interval } from 'rxjs';
import { take, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // const source = from([1, 5, 10, 15, 20]);
    // const source = of(1, 5, 10, 15, 20);
    const interval$ = interval(1000);
    const example$ = interval$.pipe(take(5)); // when 5 trigger interval then complete()

    const subscribe = example$.subscribe(
      val => {
        console.log('Value: ', `${val}`);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }

}
