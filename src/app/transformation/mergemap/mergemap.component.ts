import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { switchMap, mergeMap, tap, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    /*
    const source = fromEvent(document, 'click');
    const example = source.pipe(
      tap(event => console.log('Click value: ', event)),
      mergeMap(val => interval(1000))
    );
    */

    /*
    const obs1 = fromEvent(document, 'click');
    const obs2 = interval(1000);
    const example = obs1.pipe(
      mergeMap(val => obs2)
    );
    */

    const obs1 = of('Hello');
    const example = obs1.pipe(
      mergeMap(val => of(`${val} World`))
    );

    const subscribe = example.subscribe(
      val => {
        console.log('Emitted Valu: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }

}

/*
 - when click NOT canceld observable
*/
