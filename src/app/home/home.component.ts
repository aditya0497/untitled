import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from "@angular/core";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() navigate = new EventEmitter<string>();

  public showRegisterModal: boolean = false;

  public username: string = 'admin'; // Mocked username

  public posts = [
    { username: 'user1', content: 'This is a mock post.', time: 'Just now' },
    { username: 'user2', content: 'Another mock post.', time: '5 minutes ago' },
    { username: 'user3', content: 'This is a mock post.', time: 'Just now' },
    { username: 'user4', content: 'Another mock post.', time: '15 minutes ago' }
  ];

  public newPost: string = '';

  constructor(private authService: AuthService) {
    console.log(this.authService.getUsername(), "usr");
    this.username = this.authService.getUsername();
  }

  ngOnInit() {
    this.username = this.authService.getUsername(); // Fetch the username when the component is initialized
    console.log(this.username);
  }

  public addPost(): void {
    if (this.authService.isLoggedIn()) {
      if (this.newPost.trim()) {
        this.posts.unshift({
          username: this.username,
          content: this.newPost.trim(),
          time: 'Just now'
        });
        this.newPost = '';
      }
    } else {
      this.showRegisterModal = true;
    }
  }

  public logout(): void {
    this.authService.logout();
    this.navigate.emit('login');
  }

  public handleNavigation(event: string): void {
    if (event === 'login') {
      this.navigate.emit('login');
    } else if (event === 'home') {

      if (this.authService.isLoggedIn()) {
        this.authService.setAuthenticated(true, this.username);
        this.showRegisterModal = false;
        this.navigate.emit('home');
      } else {
        console.error('User is not logged in.');
      }
    }
  }
}
