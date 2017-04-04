import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [UserService]
})

export class WelcomeComponent {
  @Output() newUserSender = new EventEmitter();

  constructor(private router: Router, private userService: UserService) { }

  submitForm(newName: string, newCharacter: string, newColor: string) {
    var newUser: User = new User(newName, newCharacter, newColor);
    this.userService.addUser(newUser);
  }
}
