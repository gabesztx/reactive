import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-startwith',
  templateUrl: './startwith.component.html',
  styleUrls: ['./startwith.component.scss']
})
export class StartwithComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    const source = of(1, 2, 3).pipe(delay(2000));
    const example = source.pipe(startWith(0));
    const subscribe = example.subscribe(
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
