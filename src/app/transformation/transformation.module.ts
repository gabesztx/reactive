import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformationComponent } from './transformation.component';

@NgModule({
  declarations: [TransformationComponent],
  imports: [
    CommonModule
  ],
  exports: [TransformationComponent]
})
export class TransformationModule { }
