import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Store} from '@ngrx/store';
import * as fromAuth from './auth/auth.reducer';
import {getLoggedIn} from './auth/auth.reducer';

@Component({
  selector: 'app-root',
  template: `
    <app-shell [user]="user" [loggedIn]="loggedIn">
      <router-outlet></router-outlet>
    </app-shell>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: Observable<firebase.User>;
  loggedIn: Observable<boolean>;

  constructor(
    private store: Store<fromAuth.State>) {
    this.loggedIn = this.store.select(getLoggedIn);
  }

  ngOnInit() {
  }
}
