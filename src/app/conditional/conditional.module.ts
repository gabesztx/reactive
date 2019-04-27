import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionalComponent } from './conditional.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SequenceEqualComponent } from './sequence-equal/sequence-equal.component';

@NgModule({
  declarations: [ConditionalComponent, IfelseComponent, SequenceEqualComponent],
  imports: [
    CommonModule
  ],
  exports: [ConditionalComponent],
})
export class ConditionalModule { }
