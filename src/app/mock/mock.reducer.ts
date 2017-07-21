import { Action } from '@ngrx/store';

export interface MockState {
  sampleField: string
};

export const initialState: MockState = {
  sampleField: null
};

export function reducer(state = initialState, action: Action): MockState {
  switch (action.type) {

    default:
      return state;
  }
}
