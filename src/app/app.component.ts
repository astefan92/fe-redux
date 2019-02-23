import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public isLoginPage: boolean;

  constructor(
    private router: Router,
    public auth: AuthService,
  ) {}

  ngOnInit() {
    this.auth.loadUser();
    this.registerEvents();
  }

  registerEvents(): void {
    this.router.events.subscribe((route: RouterEvent) => {
      this.isLoginPage = route.url === '/login';
    });
  }
}
