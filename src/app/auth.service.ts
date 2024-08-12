import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username = '';

  private isAuthenticated = false;

  private users = [
    { username: 'admin', password: 'admin', email: 'admin@admin.com' },
  ];

  constructor() {}

  public login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user && password === user.password) {
      this.isAuthenticated = true;
      this.username = username;
      return true;
    }
    return false;
  }

  register(email: string, username: string, password: string): void {
    this.users.push({ email, username, password });
    this.login(username, password);
  }

  public getUsername(): string {
    return this.username;
  }

  public logout(): void {
    this.isAuthenticated = false;
    this.username = '';
  }

  public isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  public setAuthenticated(value: boolean, username: string): void {
    this.isAuthenticated = value;
    this.username = username;
  }
}
