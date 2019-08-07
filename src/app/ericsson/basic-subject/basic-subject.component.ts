import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-basic-subject',
  templateUrl: './basic-subject.component.html',
  styleUrls: ['./basic-subject.component.scss']
})
export class BasicSubjectComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // this.initSubject();
    // this.initReplaySubject();
    // this.initReplaySubjectWithBuffer();
  }

  initSubject() {
    const source$ = new Subject();
    source$.subscribe(x => {
      console.log('Emit 1:', x);
    });
    source$.next(1);
    /*source$.subscribe(x => {
      console.log('Emit 2:', x);
    });
    */
    // source$.next(3);
  }

  initReplaySubject() {
    const source$ = new ReplaySubject();
    source$.subscribe(x => {
      console.log('Emit 1:', x);
    });
    source$.subscribe(x => {
      console.log('Emit 2:', x);
    });
    source$.next(0);
    source$.next(1);
  }

  initReplaySubjectWithBuffer() {
    const source$ = new ReplaySubject(2);

    source$.next(1);
    source$.next(2);
    source$.next(3);

    source$.subscribe(x => {
      console.log('Emit 1:', x);
    });
    source$.subscribe(x => {
      console.log('Emit 2:', x);
    });
    // a bufferSize:
    // - next() majd az új subscriberrel működik
    // - a buffer szám az "utolsó" next()-eket futtatja le ( output: 2,3 )

  }
}
