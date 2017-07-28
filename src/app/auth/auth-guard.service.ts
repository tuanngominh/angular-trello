import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged'
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Auth from './auth.actions';
import * as fromAuth from './auth.reducer';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>, private afAuth: AngularFireAuth) {}

  canActivate(): Observable<boolean> {
    // make sure firebase auth already init
    return this.afAuth.authState
      .switchMap(() => {
        // then query ngrx state
        return this.store.select(fromAuth.getLoggedIn).take(1).map(authed => {
          if (!authed) {
            this.store.dispatch(new Auth.LoginRedirect());
            return false;
          }

          return true;
        });
      })

  }
}
