import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent, Observable } from 'rxjs';
import { exhaustMap, tap, take, delay } from 'rxjs/operators';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.scss']
})
export class ExhaustmapComponent implements OnInit {
  clicks: Observable<any>;
  result: any;

  constructor() {
  }

  ngOnInit() {

   /* this.clicks = timer(1000);
    this.result = this.clicks.pipe(
      exhaustMap((ev) => {
        console.log('first', ev);
        return interval(100).pipe(take(10));
        // return timer(3000);
      })
    );

    setInterval(() => {
      // console.log('---- timer ----');
      this.triggerMap();
    }, 2000);

    // this.triggerMap();*/


    /*const firstInterval = interval(1000).pipe(take(6));
    const secondInterval = interval(500).pipe(take(2));
    const exhaustSub = firstInterval.pipe(
      exhaustMap(value => {
        console.log(`Emission Corrected of first interval: ${value}`);
        return secondInterval;
      })
    )

    const subscribe = exhaustSub.subscribe(
      val => {
        console.log('Emitted Valu: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });*/



  }

  triggerMap() {
    const subscribe = this.result.subscribe(
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
 - Map to inner observable, ignore other values until that observable completes.
 - az elsőt leblokkolja ameddig a második véget nem ér
*/

