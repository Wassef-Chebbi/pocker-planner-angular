import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { RoomService } from '../../shared/services/room.service';
import { Room } from 'src/app/Models/room.model';
import { Observable, catchError, map, of } from 'rxjs';
import { VoteService } from '../../shared/services/vote.service';
import { vote } from '../models/vote';
import { Router } from '@angular/router';


@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  dataLoaded = false;

  roomId!: number;
  room!: any;
  members!: any[];
  votes!: vote[];

  userStory = 'https://via.placeholder.com/150';

  Link!: string;

  remainingTime!: number;
  timer: any;


  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private voteService: VoteService, private router: Router,
  ) { }

  ngOnInit() {
    this.roomId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadRoom(this.roomId);
    this.joinLink(this.roomId);
    this.getRoomVotes(this.roomId);

  }


  startTimer() {
    this.remainingTime = 10;
    this.timer = setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime <= 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
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

  deleteRoom() {
    this.roomService.deleteRoom(this.roomId).subscribe(() => {


      console.log('room deleted');
    });
    const delayInMilliseconds = 1000;
    setTimeout(() => {
      console.log("executing navigate");
      this.router.navigate(['pocker/create']);
    }, delayInMilliseconds);
  }

  joinLink(id: number) {
    this.Link = `http://localhost:4200/pocker/join/${id}`;

  }


  getRoomVotes(id: number) {
    this.voteService.getRoomVotes(id).subscribe({
      next: (votes) => {
        this.votes = votes;
        console.log(votes);
      },
      error: (error) => {
        console.error('Error fetching votes:', error);
      }
    });
  }


}




