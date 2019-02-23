export class User {

  public email: string;
  public isLoggedIn: boolean;

  constructor(user?: any) {
    this.email = user ? user.email : '';
    this.isLoggedIn = this.email ? true : false;
  }

  public save(): void {
    localStorage.setItem('currentUser', JSON.stringify(this));
  }

  public remove(): void {
    localStorage.setItem('currentUser', null);
  }
}
