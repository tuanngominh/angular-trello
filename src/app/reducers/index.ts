import { ActionReducerMap } from '@ngrx/store';
// import * as fromRouter from '@ngrx/router-store';

// TODO looks like we always need a reducer for top level reducers so create a mock here
// TODO remove later
import * as fromMock from '../mock/mock.reducer';

export interface State {
  // routerReducer: fromRouter.RouterReducerState;
  mock: fromMock.MockState
}


export const reducers: ActionReducerMap<State> = {
  mock: fromMock.reducer
  // routerReducer: fromRouter.routerReducer
};
