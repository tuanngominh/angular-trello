import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAuth from '../../../auth/auth.reducer';
import * as Auth from '../../../auth/auth.actions';
import {Observable} from 'rxjs/Observable';
import {User} from 'firebase/app';

@Component({
  selector: 'app-logged-in-layout',
  template: `
    <md-toolbar color="primary">
      <span>Trello on angular 4</span>
      <!-- This fills the remaining space of the current row -->
      <span class="example-fill-remaining-space"></span>
      <button (click)="logout()" md-icon-button>
        <md-icon>power_settings_new</md-icon>
      </button>
    </md-toolbar>
    <div class="app-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./logged-in-layout.component.scss']
})
export class LoggedInLayoutComponent implements OnInit {
  @Input() user: Observable<User>;
  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Auth.Logout());
  }
}
