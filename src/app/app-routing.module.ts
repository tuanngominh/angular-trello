import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'boards',
    canActivate: [AuthGuard],
    loadChildren: './boards/boards.module#BoardsModule'
  },
  {
    path: '',
    redirectTo: '/boards',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })]
})
export class AppRoutingModule { }
