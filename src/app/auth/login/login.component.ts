import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {

  public submitted = false;
  public email: AbstractControl;
  public password: AbstractControl;
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.initLoginForm();
  }

  public initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.email = this.loginForm.controls.email;
    this.password = this.loginForm.controls.password;
  }

  public onSubmit(event: Event, form: any): void {
    event.stopPropagation();
    this.submitted = true;

    if (this.loginForm.valid) { this.auth.login(form); }
  }
}
