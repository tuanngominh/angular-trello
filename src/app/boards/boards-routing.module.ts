import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardListComponent} from './board-list/board-list.component';
import {BoardDetailComponent} from './board-detail/board-detail.component';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardListComponent,
  },
  {
    path: 'boards/:id',
    component: BoardDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
