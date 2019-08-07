import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-obs',
  templateUrl: './basic-obs.component.html',
  styleUrls: ['./basic-obs.component.scss']
})
export class BasicObsComponent implements OnInit {
  sourceHotData$: Observable<number>;
  sourceColdData$: Subject<number>;
  // subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    /**
     * HOT OBSERVABLE
     **/
    // this.initHotObs();
    /**
     * COLD OBSERVABLE
     **/
    // this.initColdObs();

  }

  initHotObs() {
    this.sourceHotData$ = this.getSourceData$();
    this.subscriberHandler(this.sourceHotData$);
  }

  initColdObs() {
    this.sourceColdData$ = new Subject();
    this.subscriberHandler(this.sourceColdData$);
    this.sourceColdData$.next(100);
  }

  getSourceData$(): Observable<number> {
    return of(50);
  }

  subscriberHandler(obs: Observable<number>) {
    obs.subscribe(
      res => {
        console.log('Emit: ', res);
      },
      () => {
        console.log('Error');
      },
      () => {
        console.log('Complete!');
      }
    );
  }
}


// unSubscribeHandler() {
//   this.subscription.unsubscribe();
// }
// setTimeout(() => {}, 3000);
