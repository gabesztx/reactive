import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss']
})
export class MapToComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    /*const source = from([1, 2, 3, 4, 5]);
    const example = source.pipe(mapTo('convert this value'));*/

    const source = fromEvent(document, 'click');
    const example = source.pipe(mapTo('GOODBYE WORLD!'));

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
