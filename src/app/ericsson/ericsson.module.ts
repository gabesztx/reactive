import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicObsComponent } from './basic-obs/basic-obs.component';
import { BasicSubjectComponent } from './basic-subject/basic-subject.component';


@NgModule({
  declarations: [BasicObsComponent, BasicSubjectComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicObsComponent, BasicSubjectComponent]
})
export class EricssonModule { }
