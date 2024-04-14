import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { vote } from '../../pocker-planner/models/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private baseUrl = 'http://localhost:8080/api/vote';
  constructor(private http: HttpClient,) { }



  addVote(vote: vote): Observable<any> {
    const roomId = vote.roomId
    const userId = vote.userId

    return this.http.post(`${this.baseUrl}/add`, vote);
  }

  updateVote(vote: vote, voteId: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/update/${voteId}`, vote);
  }

  getRoomVotes(roomId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/votes/room/${roomId}`);
  }
}
