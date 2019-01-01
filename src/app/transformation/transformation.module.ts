import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformationComponent } from './transformation.component';
import { MapComponent } from './map/map.component';
import { MapToComponent } from './map-to/map-to.component';

@NgModule({
  declarations: [
    TransformationComponent,
    MapComponent,
    MapToComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [TransformationComponent]
})
export class TransformationModule {
}
