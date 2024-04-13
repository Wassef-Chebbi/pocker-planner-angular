import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { RoomService } from '../../shared/services/room.service';
import { Room } from 'src/app/Models/room.model';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  id!: number;
  room!: any;
  members!: any[];
  dataLoaded = false;
  userStory = 'https://via.placeholder.com/150';
  Link!: string;


  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadRoom(this.id);
    this.joinLink(this.id);

  }



  loadRoom(id: number) {
    this.roomService.findRoomById(id).subscribe({
      next: (room) => {
        if (room) {
          this.room = room;
          this.members = room.members;
          this.dataLoaded = true;
          console.log(this.room);

        }
      },
      error: (error) => {
        console.error('Error fetching room details:', error);
      }
    });
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id).subscribe(() => {
      console.log('room deleted');
    });
  }

  joinLink(id: number) {
    this.Link = `http://localhost:4200/room/${id}`;

  }


}




