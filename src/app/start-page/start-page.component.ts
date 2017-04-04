import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  providers: [UserService]
})

export class StartPageComponent{
  constructor(private router: Router, private userService: UserService) { }
  user: User = this.userService.getUser();

  morePoint() {
    this.userService.addPoint();
    console.log(this.user.points);
  }

  lessPoint() {
    this.userService.subtractPoint();
  }
}
