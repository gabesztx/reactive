import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, Subject, ReplaySubject, of, combineLatest } from 'rxjs';
import { map, mapTo, tap, concatAll, delay, combineAll } from 'rxjs/operators';
import { concat } from 'rxjs-compat/operator/concat';

// import { combineLatest } from 'rxjs-compat/operator/combineLatest';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /* SUBJECT */

    /*const mySubject = new Subject();
    const subscription1 = mySubject.subscribe(x => {
      console.log('From subscription 1:', x);
    });
    mySubject.next(1);
    const subscription2 = mySubject.subscribe(x => {
      console.log('From subscription 2:', x);
    });
    mySubject.next(2);*/

    /* AS OBSERVABLE */
    // TODO: asObservable

    /* REPLAY SUBJECT */

    // const mySubject = new Subject();
    const sub1 = new ReplaySubject(1); // next is emit before subscribe
    // const sub2 = new ReplaySubject(1); // next is emit before subscribe
    // const subscription =
    // bufferSize = 1 - only last (4) mySubject next

    // mySubject.next(2);
    // mySubject.next(2);
    // mySubject.next(3);
    // mySubject.next(4);

    const source1$ = of(1, 2, 3);
    // const source2$ = of(4, 5, 6);
    // const source3$ = of(7, 8, 9);
    // const source3$ = of(100, 200, 300);

    // const word$ = of('world');
    // const example$ = of(source1$, source2$).pipe(combineAll());
    // const
    // const source = combineLatest(source1$, source2$).pipe();
    // const source = of(source1$, source2$, source3$).pipe(combineAll());
    // combineLatest(source1$, source2$, source3$)
    // .pipe(combineAll())
    /*combineLatest(source1$)
      .subscribe(x => {
        console.log('emit: ', x);
      });*/

    // mySubject.next(1);

    // const subscription2 = mySubject.subscribe(x => {
    //   console.log('From subscription 2:', x);
    // });


    /* BEHAVIOR SUBJECT */

    /*
    const mySubject = new BehaviorSubject(0);
    // if not have emit next before subscribe, then trigger BehaviorSubject value
    // mySubject.next(1);
    const subscription1 = mySubject.subscribe(x => {
      console.log('From subscription 1:', x);
    });
    mySubject.next(2);
    */

    /*
    setTimeout(() => {
      subject.next('Val1');
    }, 1500);
    setTimeout(() => {
      subject.next('Val2');
    }, 2500);
    setTimeout(() => {
      subject.complete();
    }, 3500);
    */
  }
}
