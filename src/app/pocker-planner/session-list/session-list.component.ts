import { Component } from '@angular/core';
import { RoomService } from '../../shared/services/room.service';


@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent {

  rooms: any = [];

  constructor(

    private roomService: RoomService
  ) { }


  ngOnInit() {
    this.loadRooms();

  }



  loadRooms() {
    this.roomService.getAllRooms().subscribe((rooms) => {
      this.rooms = rooms;
      console.log(this.rooms);
    });
  }

}
