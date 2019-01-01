import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw',
  templateUrl: './throw.component.html',
  styleUrls: ['./throw.component.scss']
})
export class ThrowComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const source = throwError('This is an error!');
    const subscribe = source.subscribe(
      val => {
        console.log('Value: ', val);
      },
      val => {
        console.log(`Error: ${val}`);
      },
      () => {
        console.log('Completed!');
      });
  }

}
