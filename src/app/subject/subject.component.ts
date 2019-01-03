import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const subject: Subject<any> = new Subject();
    // const subject: BehaviorSubject<any> = new BehaviorSubject('first value');

    // subject.subscribe((data) => {
    //   console.log('Subscriber A:', data);
    // });

    const subscription: Subscription = subject.subscribe(
      value => {
        console.log('Value: ', value);
      },
      value => {
        console.log('Error: ', value);
      },
      () => {
        console.log('Completed!');
        // console.log('VALUE', subject);
        // subscription.unsubscribe();
      }
    );

    subject.next(Math.random());
    subject.next(Math.random());
    subject.complete();


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
