import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/Models/session.model';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements OnInit {
  sessions: Session[] = [];


  constructor(private sessionService: SessionService,   private router: Router,) { }

  ngOnInit(): void {
    this.loadSessions();
  }

  loadSessions(): void {
    this.sessionService.getSessions()
      .subscribe(sessions => {
        this.sessions = sessions;
      });
  }
  goToUpdateSession(sessionId: number): void {
    this.router.navigate(['edit-session', sessionId]);
  }
  deleteSession(sessionId: number): void {
    this.sessionService.deleteSession(sessionId)
      .subscribe(() => {
        console.log('Session deleted successfully!');
        // Rafraîchir la liste des sessions après la suppression
        this.loadSessions();
      });
  }
}
