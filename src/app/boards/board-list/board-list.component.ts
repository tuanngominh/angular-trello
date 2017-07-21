import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Board} from '../types';

@Component({
  selector: 'app-board-list',
  template: `
    <md-card>
      <md-card-actions>
        <div td-toolbar-content layout="row" layout-align="start center" flex>
          <span>All Boards</span>
          <span flex></span>
          <a md-icon-button routerLink="/clients/add"><md-icon class="md-24">add</md-icon></a>
        </div>
      </md-card-actions>
      <md-card-content>
        <md-list>
          <div *ngFor="let board of boards | async">
            <md-divider></md-divider>
            <md-list-item>
              <md-icon md-list-avatar>person</md-icon>
              <h3 md-line> {{board.name}} </h3>
            </md-list-item>
          </div>
        </md-list>
      </md-card-content>
    </md-card>
  `,
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  boards: Observable<Board[]>;

  constructor() { }

  ngOnInit() {
  }

}
