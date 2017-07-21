import { NgModule } from '@angular/core';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BoardsRoutingModule
  ],
  declarations: [BoardListComponent, BoardDetailComponent]
})
export class BoardsModule { }
