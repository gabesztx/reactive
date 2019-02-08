import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { mapTo, share, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // without share - output:
    /**SIDE EFFECT**
     **DONE0**
     **SIDE EFFECT**
     **DONE1**
     **SIDE EFFECT**
     **DONE2**
     **SIDE EFFECT**
     **DONE3**/

    // with share - output:
    /**SIDE EFFECT**
     **DONE0**
     **DONE1**
     **DONE2**
     **DONE3**
     **SIDE EFFECT**
     **DONE0**
     **DONE1**
     **DONE2**
     **DONE3**/

    /*const timer$ = interval(1000).pipe(
      // take(3),
      tap(x => console.log('----- Side Effect -----: ', x)),
      // share()
    );*/

    const source$ = timer(1000);

    const example$ = source$.pipe(
      tap(() => console.log('***SIDE EFFECT***')),
      mapTo('***RESULT***'),
      share()
    );
    const sub1 = example$.subscribe(
      val => {
        console.log('Done 1: ', `${val}`);
      },
      err => {
        console.log('Error 1: ', err);
      },
      () => {
        console.log('Completed - 1');
      });

    const sub2 = example$.subscribe(
      val => {
        console.log('Done 2: ', `${val}`);
      },
      err => {
        console.log('Error 2: ', err);
      },
      () => {
        console.log('Completed - 2');
      });

    const sub3 = example$.subscribe(
      val => {
        console.log('Done 3: ', `${val}`);
      },
      err => {
        console.log('Error 2: ', err);
      },
      () => {
        console.log('Completed - 3');
      });
  }

}
