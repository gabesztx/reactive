import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarterComponent } from './starter/starter.component';

@NgModule({
  declarations: [
    StarterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarterComponent
  ]
})
export class StarterModule {
}
