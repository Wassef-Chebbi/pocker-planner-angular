import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateSessionComponent } from './create-session/create-session.component';
import { JoinSessionComponent } from './join-session/join-session.component';
import { Session } from '../Models/session.model';
import { SessionComponent } from './session/session.component';
import { PockerPlannerComponent } from './pocker-planner.component';
import { SessionListComponent } from './session-list/session-list.component';



const routes: Routes = [
  {
    path: '',
    component: PockerPlannerComponent,
    children: [
      {
        path: 'create',
        component: CreateSessionComponent,
      },
      {
        path: 'join',
        component: JoinSessionComponent,
      },
      {
        path: 'session/:id',
        component: SessionComponent,
      },
      {
        path: 'sessions',
        component: SessionListComponent,
      },
    ]
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PockerPlannerRoutingModule { }
