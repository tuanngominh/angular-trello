import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(
    private firebaseAuth: AngularFireAuth
  ) {}

  loginWithFirebase(): Observable<firebase.auth.UserCredential> {
    return Observable.fromPromise(
      this.firebaseAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
    );
  }

  logout(): Observable<void> {
    return Observable.fromPromise(this.firebaseAuth.auth.signOut());
  }
}
