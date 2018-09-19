import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings-example',
  templateUrl: './bindings-example.component.html',
  styleUrls: ['./bindings-example.component.css']
})
export class BindingsExampleComponent implements OnInit {
  userName = '';
  userReset = '';

  constructor() { }

  ngOnInit() {
  }
  cambiaNombre() {
    this.userReset = 'El nombre del usuario es ' + this.userName;
  }
}
