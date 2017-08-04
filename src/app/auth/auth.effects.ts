import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import * as Auth from './auth.actions';
import { of } from 'rxjs/observable/of';
import {User} from './models';
import * as firebase from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$
    .ofType(Auth.LOGIN)
    .exhaustMap(() =>
      this.authService
        .loginWithFirebase()
        .map((credential: UserCredential) =>
          new Auth.LoginSuccess({ user: User.fromFirebase(credential.user) })
        )
        .catch(error => of(new Auth.LoginFailure(error)))
    );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$
    .ofType(Auth.LOGIN_SUCCESS)
    // TODO: redirect to '/' then with router config redirect, get redirect to '/boards' doesn't work
    // the header is change with logged in user but component still login form
    // Redirect directly to '/boards' work
    .do(() => this.router.navigate(['/boards']));

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$
    .ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT)
    .exhaustMap(() =>
      this.authService
        .logout()
        .do(authed => {
          this.router.navigate(['/login']);
        })
    );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
