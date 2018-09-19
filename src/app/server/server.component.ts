import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color:white;
      font-weight: 700;
    }
  `]
})
export class ServerComponent {
 /* serverID= 10;
  serverStatus= 'Offline';*/
 // no es necesario poner number o string
  serverID = 11;
  serverStatus = 'online';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

// o mediante un Method...

  getServerStatus () {
    return this.serverStatus;
  }

  getColor () {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
