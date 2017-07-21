import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-layout',
  template: `
  <div class="guest-layout" layout="row" layout-align="center center" flex >
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./guest-layout.component.scss']
})
export class GuestLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
