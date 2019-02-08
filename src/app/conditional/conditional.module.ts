import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionalComponent } from './conditional.component';
import { IfelseComponent } from './ifelse/ifelse.component';

@NgModule({
  declarations: [ConditionalComponent, IfelseComponent],
  imports: [
    CommonModule
  ],
  exports: [ConditionalComponent],
})
export class ConditionalModule { }
