import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-talk-to-glenda',
  templateUrl: './talk-to-glenda.component.html',
  styleUrls: ['./talk-to-glenda.component.css'],
  providers: [UserService]
})

export class TalkToGlendaComponent {
  constructor(private router: Router, private userService: UserService) { }
  user: User = this.userService.getUser();

}
