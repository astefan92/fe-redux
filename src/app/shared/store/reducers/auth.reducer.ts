import * as actions from '../actions/auth.action';
import { User } from '../../models';

export interface State {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  user: User;
};

const INITIAL_STATE: State = {
  loading: false,
  loaded: false,
  failed: false,
  user: new User()
};

export function reducer(state = INITIAL_STATE, action: actions.Actions): State {
  if (!action) { return state; }

  switch (action.type) {
    case actions.ActionTypes.DO_LOGIN: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        failed: false
      });
    }

    case actions.ActionTypes.DO_LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        failed: false,
        user: action.payload
      });
    }

    case actions.ActionTypes.DO_LOGIN_FAIL: {
      return Object.assign({}, INITIAL_STATE, { failed: true });
    }

    default: {
      return state;
    }
  }
}

export const getLoggedUser = (state: State) => state.user;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getFailed = (state: State) => state.failed;
