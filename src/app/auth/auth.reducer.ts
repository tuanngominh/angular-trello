import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { User } from './models';
import * as auth from './auth.actions';

export interface AuthState {
  user: User,
  loggedIn: boolean
};

export const initialState: AuthState = {
  user: null,
  loggedIn: false
};

export interface State extends fromRoot.State {
  auth: AuthState
}

export function reducer(state = initialState, action: auth.Actions): AuthState {
  switch (action.type) {
    case auth.INIT_USER:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user
      }

    case auth.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      };
    }

    case auth.LOGOUT: {
      return initialState;
    }

    default:
      return state;
  }
}

// Selectors

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const getLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) => state.loggedIn
);
