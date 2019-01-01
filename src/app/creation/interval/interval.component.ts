import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const source = interval(500);
    const example = source.pipe(map(value => value + 5));
    const subscribe = example.subscribe(
      val => {
        if (val === 10) {
          subscribe.unsubscribe();
        }
        console.log('Value: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }

}
