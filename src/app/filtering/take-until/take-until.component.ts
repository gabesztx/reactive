import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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
