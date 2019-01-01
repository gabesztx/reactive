import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const source = range(5, 5); // Emit numbers in provided range in sequence
    const example = source.pipe(map(value => value + 5));
    const subscribe = example.subscribe(
      val => {
        console.log('Value: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }

}
