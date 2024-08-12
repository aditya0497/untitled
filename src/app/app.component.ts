import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentView: string = 'home'; // Default view is home

  public navigate(view: string): void {
    this.currentView = view;
  }
}
