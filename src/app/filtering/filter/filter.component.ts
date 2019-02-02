import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // const source = from([1, 2, 3, 4, 5, 8]);
    const source$ = interval(1000).pipe(take(10));
    const example$ = source$.pipe(
      // tap(x => console.log('filter before: ', x)),
      filter(num => num > 5), // if true then return
      tap(x => console.log('filter after: ', x)),
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
