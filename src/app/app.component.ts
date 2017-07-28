import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Store} from '@ngrx/store';
import * as fromAuth from './auth/auth.reducer';
import {AngularFireAuth} from 'angularfire2/auth';
import * as Auth from './auth/auth.actions';
import {User} from './auth/models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-shell [user]="user" [loggedIn]="loggedIn">
      <router-outlet></router-outlet>
    </app-shell>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: Observable<firebase.User>;
  loggedIn: Observable<boolean>;

  constructor(
    private store: Store<fromAuth.State>, private afAuth: AngularFireAuth, private router: Router) {
    this.loggedIn = this.store.select(fromAuth.getLoggedIn);
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((firebaseUser: firebase.User) => {
      if (firebaseUser) {
         this.store.dispatch(new Auth.InitUser({
           user: User.fromFirebase(firebaseUser)
         }));
      } else {
        this.store.dispatch(new Auth.Logout());

        if (this.router.url !== '/login') {
          this.router.navigateByUrl('/login');
        }
      }
    });
  }
}
