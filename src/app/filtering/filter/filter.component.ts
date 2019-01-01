import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { filter } from 'rxjs/operators';

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
    const source = interval(500);
    const example = source.pipe(filter(num => num > 5)); // if true then return
    const subscribe = example.subscribe(
      val => {
        if (val === 10) {
          subscribe.unsubscribe();
        }
        console.log('Value: ', `${val}`);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }

}
