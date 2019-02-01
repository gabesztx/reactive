import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concat } from 'rxjs/operators';


@Component({
  selector: 'app-concact',
  templateUrl: './concact.component.html',
  styleUrls: ['./concact.component.scss']
})
export class ConcactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source1$ = of(1, 2, 3);
    const source2$ = of(4, 5, 6);
    const example$ = source1$.pipe(concat(source2$));

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
