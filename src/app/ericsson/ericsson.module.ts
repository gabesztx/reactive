import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicObsComponent } from './basic-obs/basic-obs.component';
import { BasicSubjectComponent } from './basic-subject/basic-subject.component';
import { CombinateSubjectComponent } from './combinate-subject/combinate-subject.component';


@NgModule({
  declarations: [BasicObsComponent, BasicSubjectComponent, CombinateSubjectComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicObsComponent, BasicSubjectComponent, CombinateSubjectComponent]
})
export class EricssonModule { }
