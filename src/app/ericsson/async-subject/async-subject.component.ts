import { Component, OnInit } from '@angular/core';
import { Observable, of, ReplaySubject, zip, combineLatest, forkJoin, Subscription } from 'rxjs';
import { combineAll, concatAll, delay, last, map, startWith, tap } from 'rxjs/operators';

interface CardData {
  src: string;
  title: string;
  text: string;
}

interface UserData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  card$: ReplaySubject<CardData | boolean | string>;
  userData$: ReplaySubject<UserData | string>;
  allData$: Observable<any>;
  allDataSub: Subscription;

  constructor() {
    this.card$ = new ReplaySubject();
    this.userData$ = new ReplaySubject();
    this.allData$ = of(false);
    // this.allData$ = zip(this.card$, this.userData$);
    // this.allData$ = combineLatest(this.card$.pipe(last()), this.userData$.pipe(last()));
    // this.allData$ = combineLatest(this.card$, this.userData$);


  }

  ngOnInit() {
    setTimeout(() => {
      this.allData$ = of(true);
    }, 1000);
    setTimeout(() => {
      this.allData$ = of(false);
    }, 2000);
    setTimeout(() => {
      this.allData$ = of(true);
    }, 3000);
    /*
    const s1$ = new ReplaySubject();
    const s2$ = new ReplaySubject();
    const source$ = of(s1$, s2$)
    .pipe(
      tap(x => console.log('Log: ', x)),
      concatAll(),
    );*/
    // s1$.next('next s1: 1');
    // s1$.next('next s1: 2');

    /*this.allData$.subscribe(value => {
      console.log('allData$: ', value);
    });
    setTimeout(() => {
      // this.allData$
    }, 2000);
    */
    // TODO: put subject next() before subcribe and use ReplaySubject(1)
    // TODO: or put subject.complete() and use pipe(last())


    /** Change spinner in card subject **/
    /*const cardData = {
      title: 'Card Title 1',
      src: 'https://dummyimage.com/100x100/000/fff',
      text: 'This is a very common use of the ngIf/else functionality: we display an alternative.'
    };

    const source1$ = of('s1').pipe(
      tap(x => console.log('s1 Log: ', x))
    );
    const source2$ = of(100).pipe(
      tap(x => console.log('s2 Log: ', x))
    );

    const example$ = of(source1$, source2$).pipe(concatAll());

    this.card$.subscribe(value => {
      console.log('card$: ', value);
    });

    this.userData$.subscribe(value => {
      console.log('userValue$: ', value);
    });

    setTimeout(() => {
      this.card$.next(cardData);
    }, 1000);
    setTimeout(() => {
      this.card$.next(false);
    }, 2000);
    setTimeout(() => {
      this.card$.next(cardData);
    }, 3000);

    const subscribe = example$.subscribe(
      val => {
        console.log('Emit value: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });*/
  }

  updateNext() {
    /** Change spinner all combinated data **/
    this.card$.next('1');
    this.card$.next('2');
    // this.card$.next('3');
    this.userData$.next('1');
    this.userData$.next('2');
    // this.userData$.next('3');
    // this.userData$.complete(); // add when get last Next subject
  }
}
