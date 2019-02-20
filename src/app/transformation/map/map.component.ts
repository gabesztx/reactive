import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // const source = from([1, 2, 3, 4, 5]);
    // const example = source.pipe(map(val => val + 10));
    const source = from([
      {name: 'Joe', age: 30},
      {name: 'Frank', age: 20},
      {name: 'Ryan', age: 50}
    ]);

    const example = source.pipe(map(({name, age}) => age));

    const subscribe = example.subscribe(
      val => {
        console.log('Emit: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
  }
}
