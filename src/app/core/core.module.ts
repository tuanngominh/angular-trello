import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {ShellComponent} from './shell/shell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoggedInLayoutComponent } from './shell/logged-in-layout/logged-in-layout.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [LoginComponent, ShellComponent, PageNotFoundComponent, LoggedInLayoutComponent],
  exports: [LoginComponent, ShellComponent, PageNotFoundComponent]
})
export class CoreModule { }
