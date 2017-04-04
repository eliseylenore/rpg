import { Component } from '@angular/core';
import { User } from './user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Dorothy\'s Life';
  user: User;

  addNewUser(newUser) {
    this.user = newUser;
  }
}
