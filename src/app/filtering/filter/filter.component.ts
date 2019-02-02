import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // const source = from([1, 2, 3, 4, 5, 8]);
    const source$ = interval(250);
    const example$ = source$.pipe(
      tap(x => console.log('filter before: ', x)),
      filter(num => num > 5), // after 5 num next()
      take(1), // when num > 5 then complete()
    );

    const subscribe = example$.subscribe(
      val => {
        console.log('Emit value: ', `${val}`);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }

}
