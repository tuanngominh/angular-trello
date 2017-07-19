import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-shell',
  template: `
    <!-- layout for logged in user -->
    <div *ngIf="(user | async)?.uid">
      <h1>Header</h1>
      <button
        *ngIf="(user | async)?.uid"
        (click)="logout()"
      >Logout</button>
      <router-outlet></router-outlet>
      <h1>Footer</h1>
    </div>
    <!-- layout for guest user -->
    <div *ngIf="!(user | async)?.uid">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  @Input() user: Observable<firebase.User>;
  @Output() onLogoutRequested = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.onLogoutRequested.emit();
  }
}
