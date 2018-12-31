import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationComponent } from './creation.component';

@NgModule({
  declarations: [CreationComponent],
  imports: [
    CommonModule
  ],
  exports: [CreationComponent]
})
export class CreationModule { }
