import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteringComponent } from './filtering.component';
import { FilterComponent } from './filter/filter.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { SkipComponent } from './skip/skip.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [FilteringComponent, FilterComponent, TakeComponent, TakeUntilComponent, SkipComponent, FirstComponent],
  imports: [
    CommonModule
  ],
  exports: [FilteringComponent]
})
export class FilteringModule { }
