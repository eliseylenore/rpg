import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS } from './mock-users';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

const masterUserList: User[] = USERS;

@Injectable()
export class UserService {
  masterUserList: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.users = angularFire.database.list('users')
  }

  returnFakeUser(){
    return new User("testName", "test", "test");
  }

  getUser() {
    return this.users[0];
  }

  addUser(newUser) {
    masterUserList.push(newUser);
  }

  addPoint() {
    masterUserList[0].points += 1;
  }

  subtractPoint() {
    masterUserList[0].points -= 1;
  }

}
