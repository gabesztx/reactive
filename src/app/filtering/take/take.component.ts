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
    const interval$ = interval(50);
    const example = interval$.pipe(take(5)); // interval output: 0,1,2 and done
    const subscribe = example.subscribe(
      val => {
        /*if (val === 10) {
          subscribe.unsubscribe();
        }*/
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
