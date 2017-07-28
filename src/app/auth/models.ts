import * as firebase from 'firebase/app';

export class User {
  static fromFirebase (firebaseUser: firebase.User): User {
    console.log(firebaseUser);
    return new User(
      firebaseUser.uid,
      firebaseUser.email,
      firebaseUser.displayName,
      firebaseUser.photoURL
    );
  }

  constructor(
    public id: string,
    public email: string,
    public name: string,
    public photoURL: string
  ) {}
}
