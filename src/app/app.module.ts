import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { MoviesPageComponent } from "./movies-page/movies-page.component";
import { MoviesService } from "./movies.service";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { MovieEffects } from "./movie.effects";
// import { counterReducer } from "./counter.reducer";
// import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    EffectsModule.forRoot([MovieEffects])
  ],
  declarations: [AppComponent, MoviesPageComponent],
  bootstrap: [AppComponent],
  providers: [MoviesService]
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
