import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // const source = of(1, 2, 3);
    const source = of(1, 2, 3);
    const example = source.pipe(scan((acc, curr) => acc + curr, 1)); // prev + curr data
    const subscribe = example.subscribe(
      val => {
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
