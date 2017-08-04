import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged'
import {of} from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Auth from './auth.actions';
import * as fromAuth from './auth.reducer';
import { AngularFireAuth } from 'angularfire2/auth';
import {User} from './models';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>, private afAuth: AngularFireAuth) {}

  canActivate(): Observable<boolean> {
    return Observable.zip(
      this.afAuth.authState.take(1),
      this.store.select(fromAuth.getLoggedIn).take(1)
    )
      .map(([firebaseUser, loggedIn]) => {
        if (loggedIn) {
          return true;
        } else if (firebaseUser) {
          this.store.dispatch(new Auth.InitUser({
            user: User.fromFirebase(firebaseUser)
          }));
          return true
        } else {
          this.store.dispatch(new Auth.LoginRedirect());
          return false;
        }
      })

  }
}
