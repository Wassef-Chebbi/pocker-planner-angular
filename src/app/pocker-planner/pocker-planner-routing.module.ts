import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSessionComponent } from './create-session/create-session.component';
import { JoinSessionComponent } from './join-session/join-session.component';
import { SessionComponent } from './session/session.component';
import { PockerPlannerComponent } from './pocker-planner.component';
import { SessionListComponent } from './session-list/session-list.component';
import { VoteComponent } from './vote/vote.component';



const routes: Routes = [
  {
    path: 'pocker',
    component: PockerPlannerComponent,

    children: [
      {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full'

      },
      {
        path: 'create',
        component: CreateSessionComponent,
      },
      {
        path: 'join/:id',//roomId
        component: JoinSessionComponent,
      },
      {
        path: 'join',//roomId
        component: JoinSessionComponent,
      },
      {
        path: 'room/:id',//roomId
        component: SessionComponent,
      },
      {
        path: 'rooms',
        component: SessionListComponent,
      },
      {
        path: 'vote/room/:roomId/member/:userId',//roomId
        component: VoteComponent,
      },
    ]
  },





];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PockerPlannerRoutingModule { }
