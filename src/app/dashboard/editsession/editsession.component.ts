import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/Models/session.model';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-edit-session',
  templateUrl: './editsession.component.html',
  styleUrls: ['./editsession.component.css']
})
export class EditSessionComponent implements OnInit {
  idSession: number = 0;
  updatedSession: Session = new Session();
  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
        this.idSession = +idParam; // Convertir en nombre
        // Autre logique de chargement de session à faire ici
        this.loadSessionToUpdate(); // Par exemple, appeler une méthode pour charger la session
    } else {
        console.error('Parameter "id" is null.'); // Gérer le cas où le paramètre 'id' est null
        // Afficher un message d'erreur à l'utilisateur ou rediriger vers une autre page, selon la logique de votre application
    }
}


  updateSession(id: number, updatedSession: Session): void {
    this.sessionService.updateSession(id, updatedSession)
      .subscribe(
        response => {
          console.log('Session updated successfully:', response);
          // Traitez la réponse ou mettez à jour votre interface utilisateur si nécessaire
        },
        (error: HttpErrorResponse) => {
          console.error('Error updating session:', error);
          // Gérez l'erreur de mise à jour de la session ici
        }
      );
  }
  private loadSessionToUpdate(): void {
    this.sessionService.getSessionById(this.idSession)
        .subscribe(
            (session: Session) => {
                this.updatedSession = session; // Mettre à jour la session à modifier
            },
            (error: any) => {
                console.error('Error loading session:', error); // Traiter les erreurs de chargement de la session
            }
        );
}
deleteSession(): void {
  this.sessionService.deleteSession(this.idSession)
    .subscribe(
      () => {
        console.log('Session deleted successfully');
        // Rediriger vers une autre page après la suppression si nécessaire
        this.router.navigate(['/sessions']);
      },
      error => {
        console.error('Error deleting session:', error);
        // Gérer l'erreur de suppression de session
      }
    );
}
}



