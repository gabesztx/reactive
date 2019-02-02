import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
      first() // only first value subscibe and completed()
    );

    const subscribe = numArrayObs.subscribe(
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
