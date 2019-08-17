import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of, ReplaySubject, zip } from 'rxjs';
import { combineAll, tap } from 'rxjs/operators';

@Component({
  selector: 'app-combinate-subject',
  templateUrl: './combinate-subject.component.html',
  styleUrls: ['./combinate-subject.component.scss']
})
export class CombinateSubjectComponent implements OnInit {
  source1$: ReplaySubject<any>;
  source2$: ReplaySubject<any>;
  sources$: Observable<any>;

  constructor() {
    // this.source1$ = new ReplaySubject(1);
    // this.source2$ = new ReplaySubject(1);
    this.source1$ = new ReplaySubject();
    this.source2$ = new ReplaySubject();
  }

  ngOnInit() {
    this.sources$ = combineLatest(this.source1$, this.source2$);
    // this.sources$ = zip(this.source1$, this.source2$);
    // this.sources$ = of(this.source1$, this.source2$).pipe(combineAll());
    this.initSource();
  }

  initSource() {

    this.source1$.next('s1:1');
    this.source1$.next('s1:2');
    this.source1$.next('s1:3');

    this.source2$.next('s2:1');
    this.source2$.next('s2:2');
    this.source2$.next('s2:3');

    this.source1$.subscribe(value => {
      console.log('source1$', value);
    });
    this.source2$.subscribe(value => {
      console.log('source2$', value);
    });
    this.sources$.subscribe(res => {
      console.log('sources: ', res);
    });

  }
}
