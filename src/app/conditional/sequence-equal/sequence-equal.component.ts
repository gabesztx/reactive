import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { sequenceEqual, map, bufferCount, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sequence-equal',
  templateUrl: './sequence-equal.component.html',
  styleUrls: ['./sequence-equal.component.scss']
})
export class SequenceEqualComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const expectedSequence = from(['q', 'w', 'e']);
    const keyStream = fromEvent(document, 'keydown')
      .pipe(
        map((e: KeyboardEvent) => e.key),
        bufferCount(3), // 3 trigger után inditja el a streamet majd az értékeket tömbe adja vissza
        tap(v => console.log('Buffer', v)),
        mergeMap(keyDowns =>
          from(keyDowns)
            .pipe(
              tap(v => console.log('KeyDodwns:', v)),
              sequenceEqual(expectedSequence), // kapott értékeket össze hasonlitja az eredetivel és ha egyenlú akkor true
              // tap(isItQwerty => console.log('Log 2', isItQwerty ? 'WELL DONE!' : 'TYPE AGAIN!'))
            )
        )
      );

    const subscribe = keyStream.subscribe(
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
