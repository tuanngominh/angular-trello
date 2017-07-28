import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../../auth/models';

@Component({
  selector: 'app-menu',
  template: `
    <button
      md-button
      [mdMenuTriggerFor]="menu"
    >
      <img
        *ngIf="(user | async)?.photoURL"
        md-card-avatar src="{{(user | async)?.photoURL }}"
      />
      <span *ngIf="!(user | async)?.photoURL">{{ (username | async) }}</span>
    </button>
    <md-menu #menu="mdMenu">
      <button md-menu-item (click)="logout()">
        <md-icon> power_settings_new </md-icon>
        <span> Logout </span>
      </button>
    </md-menu>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() user: Observable<User>;
  @Output() onLogout = new EventEmitter();

  username: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.username = this.user.map((user: User) => {
      if (user) {
        if (user.name) {
          return user.name;
        } else {
          return user.email;
        }
      }
    });
  }

  logout(): void {
    this.onLogout.next();
  }

}
