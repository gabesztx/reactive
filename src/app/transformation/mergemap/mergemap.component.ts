import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of, timer } from 'rxjs';
import { switchMap, mergeMap, tap, mapTo, take, map } from 'rxjs/operators';

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
    const obs1 = fromEvent(document, 'click');
    const obs2 = interval(1000);
    const example = obs1.pipe(
      mergeMap(val => obs2)
    );
    */

    /*const obs1 = of('Hello');
    const example = obs1.pipe(
      mergeMap(val => of(`${val} World`))
    );*/

    /* mergeMap with promise */

    /*const source = of('Source value - ');
    const myPromise = (val) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(`${val} Promise value`);
        }, 3000);
      });
    };
    const example = source.pipe(
      mergeMap(val => {
        return myPromise(val);
      })
    );*/
    
    /* mergeMap with resultSelector */
    const source = of('Hello');
    const myPromise = (val) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(`${val} Promise`);
        });
      });
    };
    const example = source.pipe(
      mergeMap(val => {
        return myPromise(val);
      }, (valueFromSource, valueFromPromise) => {
        return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
      })
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
  - párhuzamosan asyncronba futtatja le a - subscribe / requstet
  - used: amikor nem fontos a visszatérési sorrend ill több kérés esetén nem szaktíja meg a jelenlelegi
  futását
*/
