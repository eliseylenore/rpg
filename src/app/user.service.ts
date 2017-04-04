import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS } from './mock-users';

let masterUserList: User[] = USERS;

@Injectable()
export class UserService {

  constructor() { }

  returnFakeUser(){
    return new User("testName", "test", "test");
  }

  getUser() {
    return masterUserList[0];
  }

  addUser(newUser) {
    masterUserList.push(newUser);
  }

}
