import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, Subject, ReplaySubject } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';

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

    /*
    const mySubject = new Subject();
     const subscription1 = mySubject.subscribe(x => {
       console.log('From subscription 1:', x);
     });
     mySubject.next(1);
     const subscription2 = mySubject.subscribe(x => {
       console.log('From subscription 2:', x);
     });
     mySubject.next(2);
     */

    /* AS OBSERVABLE */
    // TODO: asObservable

    /* REPLAY SUBJECT */

    /*
    // const mySubject = new Subject();
    const mySubject = new ReplaySubject(1); // next is emit before subscribe
    // bufferSize = 1 - only last (4) mySubject next
    mySubject.next(1);
    mySubject.next(2);
    mySubject.next(3);
    mySubject.next(4);

    const subscription1 = mySubject.subscribe(x => {
      console.log('From subscription 1:', x);
    });
    const subscription2 = mySubject.subscribe(x => {
      console.log('From subscription 2:', x);
    });
    */


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
