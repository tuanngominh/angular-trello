import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardListComponent} from './board-list/board-list.component';
import {BoardDetailComponent} from './board-detail/board-detail.component';
import {AuthGuard} from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'boards/:id',
        component: BoardDetailComponent,
      },
      {
        path: 'boards',
        component: BoardListComponent,
      },
      {
        path: '',
        redirectTo: 'boards',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
