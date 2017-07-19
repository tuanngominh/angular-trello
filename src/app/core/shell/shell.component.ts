import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <h1>Header</h1>
    <router-outlet></router-outlet>
    <h1>Footer</h1>
  `,
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
