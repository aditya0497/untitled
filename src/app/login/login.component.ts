import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output()
  public navigate = new EventEmitter<string>();

  public username: string = '';

  public password: string = '';

  public errorMessage: string = '';

  constructor(private authService: AuthService) {}

  public login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.navigate.emit('home');
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  public goToRegister(): void {
    this.navigate.emit('register');
  }
}
