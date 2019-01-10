import { Component, OnInit } from '@angular/core';

import { fromEvent, interval } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';

@Component({
  selector: 'app-withlatestfrom',
  templateUrl: './withlatestfrom.component.html',
  styleUrls: ['./withlatestfrom.component.scss']
})
export class WithlatestfromComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const source = interval(5000);
    const secondSource = interval(1000);


/*    const example = source.pipe(
      withLatestFrom(secondSource),
      map(([first, second]) => {
        return `First Source (5s): ${first} Second Source (1s): ${second}`;
      })
    );*/

   /* const example = secondSource.pipe(
      withLatestFrom(source),
      map(([first, second]) => {
        return `First Source (5s): ${first} Second Source (1s): ${second}`;
      })
    );*/


    /*
    * a click akkor teljesül ha interval emitál
    * */
    const clicks = fromEvent(document, 'click');
    const timer = interval(5000);
    const result = clicks.pipe(withLatestFrom(timer));

    const subscribe = result.subscribe(
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
