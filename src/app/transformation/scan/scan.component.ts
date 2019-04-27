import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
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
    /*   const buttonInitialState = true;
       const toggleState = currentState => {
         return !currentState;
       };
       const click = fromEvent(document, 'click');
       const toggle = click.pipe(
         scan(toggleState, buttonInitialState)
       );
       const subscribe = toggle.subscribe(
         val => {
           console.log('Value: ', `${val}`);
         },
         err => {
           console.log('Error: ', err);
         },
         () => {
           console.log('Completed!');
         });
    */


    /*const source = of(1, 2, 3);
    const example = source.pipe(
      scan((acc, curr) => {
        return acc + curr;
      })
    );
    const subscribe = example.subscribe(
      val => {
        console.log('Value: ', `${val}`);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });*/
  }

}
