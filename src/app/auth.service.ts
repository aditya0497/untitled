import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // This makes the service available application-wide without needing to add it to providers array
})
export class AuthService {

  private username = '';

  private isAuthenticated = false;

  private users = [
    { username: 'admin', password: 'admin', email: 'admin@admin.com' },
  ];

  constructor() {}

  login(username: string, password: string): boolean {
    console.log(this.users);
    console.log(username, password);
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
    this.login(username, password); // Automatically log the user in after registration
  }

  getUsername(): string {
    return this.username; // Return the current logged-in user's username
  }

  logout(): void {
    this.isAuthenticated = false;
    this.username = '';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  setAuthenticated(value: boolean, username: string): void {
    this.isAuthenticated = value;
    this.username = username;
  }
}
