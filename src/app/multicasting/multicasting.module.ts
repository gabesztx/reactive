import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MulticastingComponent } from './multicasting.component';

@NgModule({
  declarations: [MulticastingComponent],
  imports: [
    CommonModule
  ],
  exports: [MulticastingComponent]
})
export class MulticastingModule { }
