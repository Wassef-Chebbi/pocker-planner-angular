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

  constructor(private fb: FormBuilder, private router: Router, private roomService: RoomService) {
    this.newRoom = this.fb.group({
      name: [''],
      cardSet: ['1'],

    });
  }

  ngOnInit(): void {

  }

  create() {
    console.log(this.newRoom.value);
    this.roomService.createRoom(this.newRoom.value).subscribe(() => {

    });
  }

}
