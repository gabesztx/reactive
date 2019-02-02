import { Component, OnInit } from '@angular/core';
import { interval, from } from 'rxjs';
import { skip, tap } from 'rxjs/operators';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /*const source = interval(1000);
    const example$ = source.pipe(
      // tap(x => console.log('befor val:', x)),
      skip(2), // skip 1,2 value
    );*/

    const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
      skip(2)
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
