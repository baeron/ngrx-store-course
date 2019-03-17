import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./reducers";
import { Logout } from "./auth/auth.actions";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.isLoggedIn$ = this.store.pipe(map(state => state['auth'].loggedIn));
    console.log('this.isLoggedIn$', this.isLoggedIn$);
    // tslint:disable-next-line:no-string-literal
    this.isLoggedOut$ = this.store.pipe(map(state => !state['auth'].loggedIn));
    console.log('this.isLoggedOut$', this.isLoggedOut$);

    this.store.subscribe(state => console.log(state));
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
