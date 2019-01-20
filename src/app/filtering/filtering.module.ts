import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteringComponent } from './filtering.component';
import { FilterComponent } from './filter/filter.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';

@NgModule({
  declarations: [FilteringComponent, FilterComponent, TakeComponent, TakeUntilComponent],
  imports: [
    CommonModule
  ],
  exports: [FilteringComponent]
})
export class FilteringModule { }
