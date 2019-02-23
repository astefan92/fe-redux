import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as store from '../shared/store';
import * as authActions from '../shared/store/actions/auth.action';
import { User } from '../shared/models';
import {
  LoginForm,
} from '../shared/models';
import { Subscription } from 'rxjs';

@Injectable()
export class AuthService {

  public loginLoading = this.appState.select(store.getAuthLoading);
  public loginLoaded = this.appState.select(store.getAuthLoaded);
  public loggedUser = this.appState.select(store.getLoggedUser);

  private subscriptions: Array<Subscription> = [];

  constructor(
    private router: Router,
    private appState: Store<store.State>,
  ) {
    this.registerAuthEvents();
  }

  static authAdapter(user: any): any {
    return Object.assign({}, user, { email: user.Email });
  }

  public login(form: any): void {
    this.appState.dispatch(new authActions.DoLoginAction(new LoginForm(form)));
  }

  public loadUser(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.appState.dispatch(new authActions.AddUserAction(new User(user)));
  }

  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private registerAuthEvents(): void {
    this.subscriptions.push(this.loginLoaded.subscribe((loaded: boolean) => {
      if (loaded) {
        this.router.navigate(['/jobs']);
      }
    }));

    this.subscriptions.push(this.loggedUser.subscribe((user: User) => {
      if (user.isLoggedIn) {
        user.save();
      } else {
        user.remove();
      }
    }));
  }
}
