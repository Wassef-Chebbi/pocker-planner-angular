import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';



import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/api/room';
  constructor(private http: HttpClient,) { }





  createRoom(room: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, room);
  }

  findRoomById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getById/${id}`);

  }

  getAllRooms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }


}
