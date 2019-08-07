import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { forkJoin, interval, of } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /*forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      {
        users: ajax.getJSON('https://api.github.com/users'),
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
      }*/


    // { google: object, microsoft: object, users: array }
    const example = forkJoin(
      //  emit 'Hello' immediately
      of('Hello'),
      //  emit 'World' after 1 second
      of('World').pipe(delay(1000)),
      //  emit 0 after 1 second
      interval(1000).pipe(take(1)),
      //  emit 0...1 in 1 second interval
      // tap(x => console.log('LOG: ,', x)),
      interval(1000).pipe(take(2)),
      of('OVER').pipe(delay(500)),
    )
    example.subscribe((res) => {
      console.log('res', res);
    });
  }

}
