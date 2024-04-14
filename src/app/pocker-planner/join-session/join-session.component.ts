import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Route, Router } from '@angular/router';
import { RoomService } from '../../shared/services/room.service';

import { WebsocketService } from 'src/app/shared/services/websocket.service';

@Component({
  selector: 'app-join-session',
  templateUrl: './join-session.component.html',
  styleUrls: ['./join-session.component.css']
})
export class JoinSessionComponent {
  messages: string[] = [];
  roomId!: number;


  username = localStorage.getItem('username') || 'Anonymous';
  userId !: number;


  constructor(private websocketService: WebsocketService,
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService
  ) { }



  ngOnInit() {
    // this.websocketService.connect()
    //   .subscribe({
    //     next: (message) => {
    //       this.messages.push(message);

    //     },
    //     error: (error) => {
    //       console.error('WebSocket error:', error);
    //     }
    //   });
    this.roomId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.roomId);
    console.log(this.userId);
  }




  join() {
    this.roomService.addMember(this.roomId, this.userId).subscribe({
      next: (data) => {
        console.log(data);
        console.log('Member added successfully', data);
        this.goToRoomPage();
      },
      error: (error) => {
        console.error('Error adding member:', error);
      }
    });
  }

  onUserIdInput(event: Event) {
    this.userId = Number((event.target as HTMLInputElement).value);
    console.log(this.userId);
  }

  goToRoomPage() {
    const delayInMilliseconds = 1000;
    setTimeout(() => {
      console.log("executing navigate");
      this.router.navigate(['pocker/vote/room', this.roomId, 'member', this.userId]);
    }, delayInMilliseconds);
  }

}
