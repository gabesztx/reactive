import { Component, OnInit } from '@angular/core';
import { merge, of, zip } from 'rxjs';
import { delay, mergeAll, tap } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const sourceOne = of('Hello').pipe(
      delay(1000),
      tap(x => console.log('sourceOne LOG: ', x))
    );
    const sourceTwo = of('World!').pipe(
      delay(2000),
      tap(x => console.log('sourceTwo LOG: ', x))
    );
    const sourceThree = of('Goodbye!').pipe(
      delay(3000),
      tap(x => console.log('sourceThree LOG: ', x))
    );
    const example$ = of(sourceOne, sourceTwo, sourceThree).pipe(mergeAll());

    const subscribe = example$.subscribe(
      val => {
        console.log('Emit value: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }

}
