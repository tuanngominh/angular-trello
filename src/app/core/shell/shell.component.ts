import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-shell',
  template: `
    <!-- layout for logged in user -->
    <app-logged-in-layout *ngIf="(user | async)?.uid" [user]="user">
      <router-outlet></router-outlet>
    </app-logged-in-layout>

    <!-- layout for guest user -->
    <app-guest-layout *ngIf="!(user | async)?.uid">
      <router-outlet></router-outlet>
    </app-guest-layout>
  `,
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @Input() user: Observable<firebase.User>;

  constructor() { }

  ngOnInit() {
  }
}
