import { Component, OnInit } from '@angular/core';
import { Observable, Observer, from, observable } from 'rxjs';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})


export class StarterComponent implements OnInit {


  constructor() {
    /*
    * From
    **/

    /*
    const numbers = [1, 2, 3, 4, 5];
    const arraySource = from(numbers);
    const subscribe = arraySource.subscribe(
      val => {
        console.log('Value: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
    */

    /*
    const promiseSource = from(new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    }));
    const subscribe = promiseSource.subscribe(val => console.log(val));
    */

    /*
    const map = new Map();
    map.set(1, 'Hi');
    map.set(2, 'Bye');
    const mapSource = from(map);
    const subscribe = mapSource.subscribe(val => console.log(val));
    */


  }

  ngOnInit() {
    // console.log('StarterComponent');
    let index = 0;
    const numbers = [1, 2, 3, 4, 5, 7];
    const source = Observable.create(obs => {
      // let index = 0;
      const timer = setInterval(() => {
        obs.next(numbers[index]);
        index++;
        /*if (numbers[index] === 2) {
          obs.error('Something went wrong!');
        }*/
        if (index === numbers.length) {
          clearInterval(timer);
          obs.complete();
        }
      }, 500);

      /*
      for (const n of numbers) {
        obs.next(n);
      }
      */
      // obs.complete();
    });


    const subscribe = source.subscribe(
      val => {
        console.log('Value: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }

}
