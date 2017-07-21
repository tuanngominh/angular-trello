import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-shell [user]="user">
      <router-outlet></router-outlet>
    </app-shell>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe((firebaseUser: firebase.User) => {
      if (firebaseUser) {
        if (this.router.url === '/login') {
          this.router.navigateByUrl('/');
        }
      } else {
        if (this.router.url !== '/login') {
          this.router.navigateByUrl('/login');
        }
      }
    });
  }
}
