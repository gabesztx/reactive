import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of, ReplaySubject, zip } from 'rxjs';
import { combineAll, take, tap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combinate-subject',
  templateUrl: './combinate-subject.component.html',
  styleUrls: ['./combinate-subject.component.scss']
})
export class CombinateSubjectComponent implements OnInit {
  source1$: ReplaySubject<any>;
  source2$: ReplaySubject<any>;
  sources$: Observable<any>;
  combinateAllsrc$: Observable<any>;

  constructor() {
    // this.source1$ = new ReplaySubject(1);
    // this.source2$ = new ReplaySubject(1);
    this.source1$ = new ReplaySubject();
    this.source2$ = new ReplaySubject();
  }

  ngOnInit() {
    this.sources$ = combineLatest(this.source1$, this.source2$);
    const sourcesLatest$ = this.sources$.pipe(withLatestFrom());
    // this.sources$ = zip(this.source1$, this.source2$);
    /*this.combinateAllsrc$ = of(
      this.source1$.pipe(tap(x => console.log('S1 LOG: ', x))),
      this.source2$.pipe(tap(x => console.log('S2 LOG: ', x))),
    ).pipe(combineAll());*/

    sourcesLatest$.subscribe(value => {
      console.log('emit', value);
    });

    this.initSource();
  }

  initSource() {

    /*this.source1$.next('s1:1');
    this.source1$.next('s1:2');
    this.source1$.next('s1:3');

    this.source2$.next('s2:1');
    this.source2$.next('s2:2');
    this.source2$.next('s2:3');

    this.source1$.subscribe(value => {
      console.log('source1$', value);
    this.source2$.subscribe(value => {
      console.log('source2$', value);
    });
    this.sources$.subscribe(res => {
      console.log('sources: ', res);
    });*/
    setTimeout(() => {
      this.source1$.next('s1: 1');
      this.source2$.next('s2: 1');
      this.source1$.next('s1: 2');
      this.source2$.next('s2: 2');
      // this.source2$.next('s2');
    }, 1000);
    setTimeout(() => {
    }, 2000);

    // this.source1$.next('s1: 1');
    setTimeout(() => {
      // this.source1$.next('s1');
      // this.source1$.next('s1');
    }, 3000);


  }
}
