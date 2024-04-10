import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Room } from '../../Models/room.model';
import { environnement } from '../../environnement/environnement.prod';

import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/api/session';
  constructor(private http: HttpClient) { }

  createRoom(room: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, room);
  }

  findRoomById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/rooms/${id}`);
  }

  getAllRooms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rooms`);
  }


}
