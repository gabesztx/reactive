import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombinationComponent } from './combination.component';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { ConcactComponent } from './concact/concact.component';
import { ConcactAllComponent } from './concact-all/concact-all.component';

@NgModule({
  declarations: [
    CombinationComponent,
    CombineAllComponent,
    // ConcactComponent,
    // ConcactAllComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CombinationComponent],
})
export class CombinationModule { }
