import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {ShellComponent} from './shell/shell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LoginComponent, ShellComponent, PageNotFoundComponent],
  exports: [LoginComponent, ShellComponent, PageNotFoundComponent]
})
export class CoreModule { }
