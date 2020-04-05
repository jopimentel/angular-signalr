import { Component, OnInit, OnDestroy } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Session } from '../library/interfaces/session.interface';
import { HubConnection } from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit, OnDestroy {

  sessions: Array<Session>;
  connection: HubConnection;

  constructor(private hub: DemoService, private httpClient: HttpClient) {

  }

  ngOnInit(): void {

    this.httpClient.get<Array<Session>>('http://localhost:52048/sessions')
      .subscribe(sessions => this.sessions = sessions);

    // Construye la conexión con el servidor
    this.connection = this.hub.connection('http://localhost:52048/hubs/session');

    // Inicia conexión
    this.connection.start().then(() => {

      // Se subscribe a una función en particular
      this.connection.on('logon', (info: any, sessions: Array<Session>) => {
        console.log(info);
        this.sessions = sessions;
      });

      this.subscribe();

      this.connection.on('clear', () => {
        const register = document.querySelector('#register');
        register.innerHTML = null;
      });
    });
  }

  ngOnDestroy(): void {
    this.connection?.stop();
  }

  subscribe() {
    this.connection.invoke('SubscribeAsync')
      .then(i => {
        // console.log(i);
      });
  }

  kickoff() {
    this.connection.invoke('KickOffAsync')
      .then(i => {
        // console.log(i);
      });
  }

  clear() {
    this.connection.invoke('Clear')
      .then(i => {
        // console.log(i);
      });
  }


}
