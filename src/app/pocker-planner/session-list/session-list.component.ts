import { Component } from '@angular/core';
import { RoomService } from '../../shared/services/room.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent {

  rooms: any = [];

  constructor(

    private roomService: RoomService,
    private router: Router,
  ) { }


  ngOnInit() {
    console.log("onInit is called");
    this.loadRooms();

  }



  loadRooms() {
    this.roomService.getAllRooms().subscribe((rooms) => {
      this.rooms = rooms;
      console.log(this.rooms);
    });
  }


  openRoom(roomId: string) {
    const delayInMilliseconds = 1000;
    setTimeout(() => {
      console.log("executing navigate");
      this.router.navigate(['pocker/room', roomId]);
    }, delayInMilliseconds);
  }

  joinRoom(roomId: string) {
    const delayInMilliseconds = 1000;
    setTimeout(() => {
      console.log("executing navigate");
      this.router.navigate(['pocker/join', roomId]);
    }, delayInMilliseconds);
  }

}
