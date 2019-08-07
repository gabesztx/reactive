import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombinationComponent } from './combination.component';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { ConcactComponent } from './concact/concact.component';
import { ConcactAllComponent } from './concact-all/concact-all.component';
import { StartwithComponent } from './startwith/startwith.component';
import { WithlatestfromComponent } from './withlatestfrom/withlatestfrom.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { MergeComponent } from './merge/merge.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ZipComponent } from './zip/zip.component';

@NgModule({
  declarations: [
    CombinationComponent,
    CombineAllComponent,
    StartwithComponent,
    WithlatestfromComponent,
    ConcactComponent,
    ConcactAllComponent,
    CombineLatestComponent,
    MergeComponent,
    ForkJoinComponent,
    ZipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CombinationComponent],
})
export class CombinationModule { }
