import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from '../../shared/services/room.service';



@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent {

  newRoom!: FormGroup;
  roomId!: number;

  constructor(private fb: FormBuilder,
    private router: Router,
    private roomService: RoomService,
  ) {
    this.newRoom = this.fb.group({
      name: [''],
      cardSet: ['1'],
    });
  }



  create() {
    console.log(this.newRoom.value);
    this.roomService.createRoom(this.newRoom.value).subscribe({
      next: response => {


        this.roomId = response.roomid;
        localStorage.setItem('roomId', this.roomId.toString());
        this.goToRoomPage(this.roomId);
      },
      error: error => {
        console.error('There was an error updating category', error)
      }
    });
  }

  goToRoomPage(roomId: number) {
    console.log("sdsdsdfewrEFWSFEWEFWEFWEFW");
    const delayInMilliseconds = 1000;
    setTimeout(() => {
      console.log("executing navigate");
      this.router.navigate(['/room', roomId]);
    }, delayInMilliseconds);
  }
  // goToRoomPage(roomId: number) {
  //   this.router.navigate(['/room', roomId]);
  // }

}
