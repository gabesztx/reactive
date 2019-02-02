import { Component, OnInit } from '@angular/core';
import { timer, combineLatest } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const timerOne = timer(1000, 4000);
    const timerTwo = timer(2000, 4000);
    const timerThree = timer(3000, 4000);

    const example$ = combineLatest(timerOne, timerTwo, timerThree);

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
