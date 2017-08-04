import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as fromAuth from './auth/auth.reducer';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from './auth/models';
import {Router} from '@angular/router';
import 'rxjs/add/operator/withLatestFrom';

@Component({
  selector: 'app-root',
  template: `
    <app-shell [user]="user$" [loggedIn]="loggedIn">
      <router-outlet></router-outlet>
    </app-shell>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  loggedIn: Observable<boolean>;

  constructor(
    private store: Store<fromAuth.State>, private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.store.select(fromAuth.getUser);
    this.loggedIn = this.store.select(fromAuth.getLoggedIn);
  }

  ngOnInit() {}
}
