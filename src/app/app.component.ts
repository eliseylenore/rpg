import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]

})
export class AppComponent{
  title = 'Welcome to Dorothy\'s Life';
  constructor(private router: Router, private userService: UserService) { }

  user: User = this.userService.getUser();
  // user: User = this.userService.returnFakeUser();

}
