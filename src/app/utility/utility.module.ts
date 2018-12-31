import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityComponent } from './utility.component';

@NgModule({
  declarations: [UtilityComponent],
  imports: [
    CommonModule
  ],
  exports: [UtilityComponent]
})
export class UtilityModule { }
