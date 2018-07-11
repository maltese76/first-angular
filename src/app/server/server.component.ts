import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
 /* serverID= 10;
  serverStatus= 'Offline';*/
 //no es necesario poner number o string
  serverID: number = 11;
  serverStatus: string = 'Online';

//o mediante un Method...

  getServerStatus () {
    return this.serverStatus;
  }
}
