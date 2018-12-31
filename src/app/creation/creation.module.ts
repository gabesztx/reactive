import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationComponent } from './creation.component';
import { FromComponent } from './from/from.component';
import { CreateComponent } from './create/create.component';
import { EmptyComponent } from './empty/empty.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { RangeComponent } from './range/range.component';
import { ThrowComponent } from './throw/throw.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    CreationComponent,
    FromComponent,
    CreateComponent,
    EmptyComponent,
    FromEventComponent,
    IntervalComponent,
    OfComponent,
    RangeComponent,
    ThrowComponent,
    TimerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreationComponent
  ]
})
export class CreationModule {
}
