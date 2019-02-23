import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  LoginForm,
} from '../shared/models';

@Injectable()
export class AuthApiService {

  constructor(public http: HttpClient) {}

  public login(form: LoginForm) {
    return this.http.post('http://localhost:1234/', form);
  }
}
