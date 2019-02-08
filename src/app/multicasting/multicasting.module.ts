import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MulticastingComponent } from './multicasting.component';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [MulticastingComponent, ShareComponent],
  imports: [
    CommonModule
  ],
  exports: [MulticastingComponent]
})
export class MulticastingModule { }
