import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Session } from './Models/session.model';
import { environnement } from './environnement/environnement.prod';
import { SessionComponent } from './dashboard/session/session.component';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  addSession(newSession: any) {
    throw new Error('Method not implemented.');
  }
  getAllSessions() {
    throw new Error('Method not implemented.');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private baseUrl = 'http://localhost:8085/api/session';
  constructor(private http: HttpClient) { }

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>("http://localhost:8085/api/session/getAll", this.httpOptions);
  }
  getSessionById(idSession: number): Observable<any> {
    return this.http.get<Session>(`http://localhost:8085/api/session/updateSession/${idSession}`, this.httpOptions);
  }

  createSession(session: Session): Observable<Session> {
    return this.http.post<Session>(
      "http://localhost:8085/api/session/createSession", session, this.httpOptions);
  }
  updateSession(idSession: number | undefined, session: Session): Observable<Session> {
    if (idSession !== null && idSession !== undefined) {
      return this.http.put<Session>(`http://localhost:8085/api/session/updateSession/${idSession}`, session);
    } else {
      console.error('idSession est null ou undefined');
      // Retourner un Observable vide ou gérer l'erreur selon vos besoins
      return throwError('idSession est null ou undefined');
    }

  }

generateSessionURL(): string {
  const uuid = uuidv4();
  const baseURL = 'http://localhost:4200/session/vote/';
  const sessionURL = `${baseURL}${uuid}`;

  return sessionURL;
}

  deleteSession(idSession: number): Observable<void> {
    const url = `http://localhost:8085/api/session/deleteSession/${idSession}`;
    return this.http.delete<void>(url);
  }}
