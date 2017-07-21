import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  template: `
    <md-card class="text-center login-card">
      <md-card-header>
        <md-card-title><h1 class="md-display-1">Trello sample app</h1></md-card-title>
        <md-card-subtitle>On angular4 & ngrx4</md-card-subtitle>
      </md-card-header>
      <md-card-actions>
        <button (click)="login()" md-raised-button color="primary">Login</button>
      </md-card-actions>
    </md-card>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
