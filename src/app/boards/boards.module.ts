import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BoardsRoutingModule
  ],
  declarations: [BoardListComponent, BoardDetailComponent]
})
export class BoardsModule { }
