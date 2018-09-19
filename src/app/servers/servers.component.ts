import { Component, OnInit } from '@angular/core';
// import {setTimeout} from 'timers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No se ha creado todavia ninguno';
  serverName = 'Nombre por defecto';
  serverCreated = false;
  servers= ['servidor 1', 'servidor 2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer () {
    this.serverCreationStatus = 'Servidor creado con nombre ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServer (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
