import { Action } from '@ngrx/store';
import {
  LoginForm,
} from '../../models';
import { type } from '../../utility';

export const ActionTypes = {
  DO_LOGIN: type('[Auth] Do Login'),
  DO_LOGIN_SUCCESS: type('[Auth] Do Login Success'),
  DO_LOGIN_FAIL: type('[Auth] Do Login Fail'),
  ADD_USER: type('[Auth] Add User'),
};

export class DoLoginAction implements Action {
  type = ActionTypes.DO_LOGIN;

  constructor(public payload: LoginForm) { }
}

export class DoLoginSuccessAction implements Action {
  type = ActionTypes.DO_LOGIN_SUCCESS;

  constructor(public payload: any) { }
}

export class DoLoginFailAction implements Action {
  type = ActionTypes.DO_LOGIN_FAIL;

  constructor(public payload: any = null) { }
}

export class AddUserAction implements Action {
  type = ActionTypes.ADD_USER;

  constructor(public payload: any = null) { }
}

export type Actions
  = DoLoginAction
  | DoLoginSuccessAction
  | DoLoginFailAction
  | AddUserAction;
