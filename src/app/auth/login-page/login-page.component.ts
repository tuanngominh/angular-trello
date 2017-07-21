import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAuth from '../auth.reducer';
import * as Auth from '../auth.actions';

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
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new Auth.Login());
  }
}
