import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Output() navigate = new EventEmitter<string>();

  public email: string = '';

  public username: string = '';

  public password: string = '';

  constructor(private authService: AuthService) {}

  register() {
    if (this.email && this.username && this.password) {
      this.authService.register(this.email, this.username, this.password);
      this.navigate.emit('home'); // Navigate to home after successful registration
    }
  }

  public goToLogin() {
    this.navigate.emit('login');
  }

  public goToHome() {
    console.log("2", this.username);
    this.authService.register(this.email, this.username, this.password);
    this.authService.login(this.username, this.password);
    this.navigate.emit('home');
  }
}
