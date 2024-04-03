import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/Models/session.model';
import { SessionService } from 'src/app/session.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  sessionForm: FormGroup;
  sessionURL!: string;

  constructor(
    private fb: FormBuilder,
    private SessionService: SessionService,
    private router: Router
    ) {
    this.sessionForm = this.fb.group({
      name: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {     this.sessionURL = this.SessionService.generateSessionURL();}

  createSession(): void {
    if (this.sessionForm.valid) {
      this.SessionService.createSession(this.sessionForm.value).subscribe(
        () => {
          console.log('Session created successfully');
          // Rediriger vers la page "liste_session" après la création de la session
          this.router.navigate(['/list-sessions']);
        },
        error => {
          console.error('Error creating session:', error);
          // Gérer l'erreur de création de session
        }
      );
    } else {
      // Si le formulaire n'est pas valide, marquez tous les champs comme touchés pour afficher les erreurs
      this.sessionForm.markAllAsTouched();
    }
  }
  generateSessionURL(): void {
    this.sessionURL = this.SessionService.generateSessionURL();
  }
  
}
