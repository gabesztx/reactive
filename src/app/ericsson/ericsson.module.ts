import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicObsComponent } from './basic-obs/basic-obs.component';
import { BasicSubjectComponent } from './basic-subject/basic-subject.component';
import { CombinateSubjectComponent } from './combinate-subject/combinate-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [BasicObsComponent, BasicSubjectComponent, CombinateSubjectComponent, AsyncSubjectComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicObsComponent, BasicSubjectComponent, CombinateSubjectComponent, AsyncSubjectComponent, CardComponent]
})
export class EricssonModule {
}
