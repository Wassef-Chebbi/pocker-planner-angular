import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/shared/services/websocket.service';

@Component({
  selector: 'app-join-session',
  templateUrl: './join-session.component.html',
  styleUrls: ['./join-session.component.css']
})
export class JoinSessionComponent {
  messages: string[] = [];


  constructor(private websocketService: WebsocketService) { }



  ngOnInit() {
    this.websocketService.connect()
      .subscribe({
        next: (message) => {
          this.messages.push(message);

        },
        error: (error) => {
          console.error('WebSocket error:', error);
        }
      });
  }

}
