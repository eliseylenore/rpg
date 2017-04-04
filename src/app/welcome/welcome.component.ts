import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Output() newUserSender = new EventEmitter();

  constructor() { }

  submitForm(newName: string, newCharacter: string, newColor: string) {
    var newUser: User = new User(newName, newCharacter, newColor);
    this.newUserSender.emit(newUser);

  }
}
