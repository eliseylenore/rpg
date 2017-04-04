import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-display-points',
  templateUrl: './display-points.component.html',
  styleUrls: ['./display-points.component.css'],
  providers: [UserService]
})
export class DisplayPointsComponent{
  constructor(private router: Router, private userService: UserService) { }
  user: User = this.userService.getUser();
}
