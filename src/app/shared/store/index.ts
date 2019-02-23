import {
  ActionReducerMap,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
  createSelector,
} from '@ngrx/store';

import * as fromAuth from './reducers/auth.reducer';
import * as fromRouter from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';

export interface State {
  login: fromAuth.State;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  login: fromAuth.reducer,
  router: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

// export const getLoginState = createFeatureSelector<State, fromAuth.State> ('login');
export const getAuthState   = (state: State) => state.login;
export const getAuthLoaded  = createSelector(getAuthState, fromAuth.getLoaded);
export const getAuthLoading = createSelector(getAuthState, fromAuth.getLoading);
export const getAuthFailed  = createSelector(getAuthState, fromAuth.getFailed);
export const getLoggedUser  = createSelector(getAuthState, fromAuth.getLoggedUser);
