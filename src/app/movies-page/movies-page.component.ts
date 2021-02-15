import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-movies-page",
  templateUrl: "./movies-page.component.html",
  styleUrls: ["./movies-page.component.css"]
})
export class MoviesPageComponent {
  movies$: Observable<Movie[]> = this.store.select(state => state.movies);

  constructor(private store: Store<{ movies: Movie[] }>) {}

  ngOnInit() {
    this.store.dispatch({ type: "[Movies Page] Load Movies" });
  }
}

export interface Movie {
  name: string;
}
