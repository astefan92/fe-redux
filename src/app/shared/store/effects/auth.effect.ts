import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AuthApiService } from '../../../auth/auth-api.service';
import * as actions from '../actions/auth.action';
import { User } from '../../models';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authApiService: AuthApiService) { }

  @Effect()
  doLogin$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_LOGIN),
    map((action: actions.DoLoginAction) => {
      return action.payload;
    }),
    switchMap(state => {
      return this.authApiService.login(state)
        .pipe(
          map(user => new actions.DoLoginSuccessAction(new User(user))),
          catchError(error => of(new actions.DoLoginFailAction()))
        );
    }));
}
