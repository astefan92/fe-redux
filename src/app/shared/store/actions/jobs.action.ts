import { Action } from '@ngrx/store';
import { Job } from '../../models';
import { type } from '../../utility';

export const ActionTypes = {
  LOAD: type('[Jobs] Load'),
  LOAD_SUCCESS: type('[Jobs] Load Success'),
  LOAD_FAIL: type('[Jobs] Load Fail')
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: any = null) { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Array<Job>) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any = null) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
