import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

    // Array
    const source = from([1, 2, 3, 4, 5]);

    // Promise
    // const source = from(new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve('Hello Promise!');
    //   }, 2000);
    // }));

    // Map
    // const map = new Map();
    // map.set(1, 'Hi');
    // map.set(2, 'Bye');
    // const source = from(map);

    const subscribe = source.subscribe(
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
