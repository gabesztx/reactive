import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicObsComponent } from './basic-obs/basic-obs.component';


@NgModule({
  declarations: [BasicObsComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicObsComponent]
})
export class EricssonModule { }
