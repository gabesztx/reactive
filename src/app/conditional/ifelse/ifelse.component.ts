import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.scss']
})
export class IfelseComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    const click$ = fromEvent(document, 'click').pipe(
      map(() => Math.random() * 10),
      tap(num => console.log('Click value: ', num))
    );

    // const
    const subscribe = click$.subscribe(
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
