import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const source = of(1, 2, 3, 4, 5);
    /*
      const source = of(
        {name: 'Brian'},
        [1, 2, 3],
        () => 'hello');
     */
    const subscribe = source.subscribe(
      val => {
        console.log('Valu: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }
}
