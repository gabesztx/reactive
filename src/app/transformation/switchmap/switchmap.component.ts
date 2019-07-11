import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// import { mapTo } from 'rxjs-compat/operator/mapTo';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const source = of([1, 2, 3, 5]).pipe(
      mergeMap((array) => {
        const newArray = array.reduce((acc, curr) => {
          return acc + curr;
        });
        return of([newArray, ...array]);
      })
    );
    // tap(x => console.log('of value: ', x)),

    const subscribe = source.subscribe(
      val => {
        console.log('Emitted Valu: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        // console.log('Completed!');
      });

    /*const source = of([0, 1, 2, 3, 4]).pipe(
      // tap(x => console.log('of value: ', x)),
      switchMap(val => {
        return val;
      }),
      // tap(x => console.log('from value: ', x)),
    );*/


    /* const source = timer(0, 3000);
     const example = source.pipe(
       switchMap(() => interval(1000))
     );*/

    /*const source = fromEvent(document, 'click').pipe(
      // switchMap(() => of(3000, 1000, 1000))
      switchMap(() => of(1000))
    );
    const example$ = source.pipe(
      tap(x => console.log('click', x)),
      // concatMap(val => {
      switchMap(val => {
      // mergeMap(val => {
        return timer(1000).pipe(
          delay(val),
          map(value => {
            console.log('Value', val);
            return value;
          }),
          take(3)
        );
      })
    );

    const subscribe = example$.subscribe(
      val => {
        console.log('Emitted Valu: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });*/


    /*  const clickEvent$ = fromEvent(document, 'click');
      const source2$ = interval(1000);
      const example$ = clickEvent$.pipe(
        // take(1),
        tap(x => console.log('click')),
        switchMap(val => source2$.pipe(take(5)))
      );*/


    /*const source$ = of(2000, 4000, 1000, 3000);
    const example$ = source$.pipe(
      tap(x => console.log('source values: ', x)),
      switchMap(val => of(val).pipe(delay(val)))
      // mergeMap(val => of(val).pipe(delay(val)))
    );*/

    /*const subscribe = source$.subscribe(
      val => {
        console.log('Emitted Valu: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });*/
    // output: 3000 completed()


    /*
    const character$ = Observable.create(obs => {
      obs.next('A');
      setTimeout(() => obs.next('B'), 200);
      setTimeout(() => obs.complete(), 300);
    });

    const number$ = interval(50).pipe(take(5));
    character$.pipe(
      tap(x => console.log('value from source: ', `${x}`)),
      switchMap(() => number$)
    ).subscribe(
      val => {
        console.log('Emitted Valu: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
      */

    // const iteral$ = timer(0, 500).pipe(
    //   tap(x => console.log('LOG: ', x)),
    //   take(5)
    // );
    /*const charecter$ = new Observable(obs => {
      // setTimeout(() => {});
      setTimeout(() => {
        obs.next('A');
      }, 500);
      setTimeout(() => {
        obs.next('B');
        // obs.next('c');
      }, 1000);
      // obs.complete();
    }).pipe(

      // flatMap(value => {
      switchMap(value => {
        return timer(0, 500).pipe(
          // tap(x => console.log('LOG: ', x)),
          map(number => `${value} : ${number}`),
          take(3)
        );
      })
    );

    const subscribe = charecter$.subscribe(
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
}

/*
 - When click canceld (old) fromEvent observable
 Tip:
 - short-lived streams like for example HTTP Requests, that only emit one value
 - long-lived streams such as for example the ones returned by AngularFire, which is an Angular library that provides some services for interacting with the Firebase real-time database and authentication
 - If you would like more than one inner subscription to be maintained, try mergeMap!
 - This operator is generally considered a safer default to mergeMap!
 - This operator can cancel in-flight network requests!
   - used:
*/


/*
* ha több switchmap van és meg akarjuk őrizni az állapotokat, akkor switch map kapott előző eredményt egy tömbe pusholjuk és adjuk tövább a next observableba
*/
