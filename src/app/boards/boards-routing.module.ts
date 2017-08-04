import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardListComponent} from './board-list/board-list.component';
import {BoardDetailComponent} from './board-detail/board-detail.component';
import {AuthGuard} from '../auth/auth-guard.service';

const routes: Routes = [
  // TODO always show detail page no matter detail route come first or listing route come first
  // {
  //   path: ':id',
  //   component: BoardDetailComponent,
  // },
  {
    path: '',
    component: BoardListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class BoardsRoutingModule { }
