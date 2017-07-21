import * as firebase from 'firebase/app';

export class User {
  static fromFirebase (firebaseUser: firebase.User): User {
    return new User(firebaseUser.uid, firebaseUser.displayName);
  }

  constructor(public id: string, public name: string) {}
}
