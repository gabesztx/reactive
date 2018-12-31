import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { StarterModule } from './starter/starter.module';
import { CombinationModule } from './combination/combination.module';
import { ConditionalModule } from './conditional/conditional.module';
import { CreationModule } from './creation/creation.module';
import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { FilteringModule } from './filtering/filtering.module';
import { TransformationModule } from './transformation/transformation.module';
import { FilteringModule } from './filtering/filtering.module';
import { UtilityModule } from './utility/utility.module';
import { MulticastingModule } from './multicasting/multicasting.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    StarterModule,
    CombinationModule,
    ConditionalModule,
    CreationModule,
    ErrorHandlingModule,
    FilteringModule,
    TransformationModule,
    UtilityModule,
    MulticastingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
