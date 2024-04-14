import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { RoomService } from '../../shared/services/room.service';
import { Room } from 'src/app/Models/room.model';
import { Observable, catchError, map, of } from 'rxjs';
import { VoteService } from '../../shared/services/vote.service';
import { vote } from '../models/vote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  room!: Room;
  roomId!: number;
  userId!: number;
  vot!: vote;

  cards = [1, 2, 3, 5, 8, 13, 20, 40, 100];
  value = 0;
  selectedCard!: number;



  dataLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private voteService: VoteService
  ) { }


  ngOnInit() {
    this.roomId = Number(this.route.snapshot.paramMap.get('roomId'));
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    //this.loadCardSet(this.roomId);

  }


  // loadCardSet(id: number) {
  //   this.roomService.findRoomById(id).subscribe({
  //     next: (room) => {
  //       if (room) {
  //         this.room = room;
  //         this.dataLoaded = true;
  //         console.log(room.cardSet);
  //         if (room.roomCardSet === 1) {
  //           const cardSet = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  //         } else if (room.roomCardSet === 2) {
  //           const cardSet = [1, 2, 3, 5, 8, 13, 20, 40, 100];
  //         }
  //         // else if (room.roomCardSet === 3) {
  //         //   this.cardSet = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  //         // } 
  //         else {
  //           const cardSet = [];
  //         }

  //       }
  //       console.log(this.cards);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching room details:', error);
  //     }
  //   });
  // }

  vote(value: number) {
    console.log(value);
    this.selectedCard = value;
    this.vot = new vote();
    this.vot.value = value;
    this.vot.roomId = this.roomId;
    this.vot.userId = this.userId;
    console.log(this.vot);


  }
}
