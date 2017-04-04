import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS } from './mock-users';

let masterUserList: User[] = USERS;

@Injectable()
export class UserService {

  constructor() { }

  getUser() {
    return USERS[0];
  }

  addUser(User) {
    masterUserList.push(User);
  }

}
