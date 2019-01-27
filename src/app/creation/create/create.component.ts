import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const numbers = [1, 2, 3, 4, 5, 7];
    const source = Observable.create(obs => {

      // basic
      for (const n of numbers) {
        obs.next(n);
      }

      setTimeout(() => {
        // console.log('unsubscribe');
        obs.complete();
        // subscribe.unsubscribe();
      }, 2000);

      // obs.complete();

      // interval
      /*
      let index = 0;
      const timer = setInterval(() => {
        obs.next(numbers[index]);
        index++;
        // error handler
        if (numbers[index] === 2) {
          // obs.error('Something went wrong!');
        }

        if (index === numbers.length) {
          clearInterval(timer);
          obs.complete();
        }
      }, 500);
      */
    });

    // const source = Observable.create(observer => {
    //   let value = 0;
    //   const interval = setInterval(() => {
    //     if (value % 2 === 0) {
    //       observer.next(value);
    //       // observer.complete();
    //     }
    //     value++;
    //   }, 1000);
    //
    //   return () => {
    //     console.log('clearInterval');
    //     return clearInterval(interval);
    //   };
    // });

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



    /*setTimeout(() => {
      subscribe.unsubscribe();
    }, 5000);*/
  }
}
