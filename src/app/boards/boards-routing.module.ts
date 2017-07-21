import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardListComponent} from './board-list/board-list.component';
import {BoardDetailComponent} from './board-detail/board-detail.component';
import {AuthGuard} from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardListComponent,
    // TODO find a way to guard all the route, not one by one like this
    canActivate: [AuthGuard]
  },
  {
    path: 'boards/:id',
    component: BoardDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
