import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RoomService } from '../../shared/services/room.service';
import { Room } from 'src/app/Models/room.model';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  room!: Room;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.loadRoom(params['id']);
    });
  }



  loadRoom(id: number) {
    this.roomService.findRoomById(id).subscribe((room) => {
      this.room = room;
    });
  }



}
