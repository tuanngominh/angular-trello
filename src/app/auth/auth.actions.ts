import { Action } from '@ngrx/store';
import {User} from './models';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const LOGIN_REDIRECT = '[Auth] Login Redirect';
export const INIT_USER = '[Auth] Initialize User';

export class Login implements Action {
  readonly type = LOGIN;
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: { user: User }) {}
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
  readonly type = LOGIN_REDIRECT;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class InitUser implements Action {
  readonly type = INIT_USER;

  constructor(public payload: { user: User }) {}
}

export type Actions =
  | Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Logout
  | InitUser
  ;
