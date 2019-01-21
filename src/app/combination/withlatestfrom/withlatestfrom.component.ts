import { Component, OnInit } from '@angular/core';

import { fromEvent, interval, timer } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';

@Component({
  selector: 'app-withlatestfrom',
  templateUrl: './withlatestfrom.component.html',
  styleUrls: ['./withlatestfrom.component.scss']
})
export class WithlatestfromComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /*
    * a click akkor teljesül ha interval emitál
    * */
    // const clicks = fromEvent(document, 'click');
    // const timer$ = timer(2000);
    // const example = clicks.pipe(withLatestFrom(timer$));

    const source = interval(5000); // emit every 5s
    const secondSource = interval(1000); // emit every 1s

    /*const example = secondSource.pipe( // withLatestFrom slower than source
      withLatestFrom(source), // both sources must emit at least 1 value (5s) before emitting
      map(([first, second]) => {
        return `Source (1s): ${first} Latest From (5s): ${second}`;
      })
    );*/

    const example = source.pipe(
      withLatestFrom(secondSource),
      map(([first, second]) => {
        return `First Source (5s): ${first} Second Source (1s): ${second}`;
      })
    );

    const subscribe = example.subscribe(
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

/*
* ha az első interval érvényesól emitál és az ő idejében vissza adja a második interval álalti értéket ahol éppen tart
*
* */
