import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private url = 'ws://localhost:8080/pocker';
  private socket$!: WebSocketSubject<any>;

  constructor() { }

  public connect(): Observable<any> {
    this.socket$ = webSocket(this.url);
    console.log("connected with success")
    return this.socket$;
  }

  public sendMessage(message: any) {
    if (this.socket$) {
      this.socket$.next(message);
    } else {
      console.error('WebSocket not connected, cannot send message');
    }
  }
}
