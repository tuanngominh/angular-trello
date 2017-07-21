import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Auth from './auth.actions';
import * as fromAuth from './auth.reducer';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(fromAuth.getLoggedIn).take(1).map(authed => {
      if (!authed) {
        this.store.dispatch(new Auth.LoginRedirect());
        return false;
      }

      return true;
    });
  }
}
