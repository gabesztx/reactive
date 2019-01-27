  import { Component, OnInit } from '@angular/core';
  import { empty, Observable } from 'rxjs';
  import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // deprecated
    /*const source = empty().pipe(startWith())
    const subscribe = example.subscribe(
      val => {
        console.log('Emitted Valu: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });*/
  }

}
