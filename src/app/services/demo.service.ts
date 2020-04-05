import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HubConnectionBuilder, LogLevel, HubConnection } from '@microsoft/signalr';

@Injectable({ providedIn: 'root' })
export class DemoService {

  constructor(private httpClient: HttpClient) {

  }

  connection(url: string): HubConnection {
    return new HubConnectionBuilder()
      .withUrl(url)
      .withAutomaticReconnect()
      .configureLogging(LogLevel.None)
      .build();
  }

}
