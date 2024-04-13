import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RoomService } from '../../shared/services/room.service';
import { Room } from 'src/app/Models/room.model';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  id!: number;
  room!: Room;


  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) { }

  ngOnInit() {


    //this.id = Number(localStorage.getItem('roomId'));
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadRoom(this.id);
  }

  loadRoom(id: number) {
    this.roomService.findRoomById(id).subscribe((room) => {
      this.room = room;
      console.log(this.room);
    }, (error) => {
      console.error('Error fetching room details:', error);
    });
  }

  // deleteRoom(id: number) {
  //   this.roomService.deleteRoom(id).subscribe(() => {
  //     console.log('room deleted');
  //   });
  // }
}




