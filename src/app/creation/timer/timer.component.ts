import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // const source = timer(1000);
    const source = timer(0, 100); // first argument delay, second: looptimer
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
