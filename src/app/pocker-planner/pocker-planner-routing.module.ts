import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { CreateSessionComponent } from './create-session/create-session.component';
import { JoinSessionComponent } from './join-session/join-session.component';
import { Session } from '../Models/session.model';
import { SessionComponent } from './session/session.component';


const routes: Routes = [
  {
    path: 'add',
    component: CreateSessionComponent,
  },
  {
    path: 'join',
    component: JoinSessionComponent,
  },
  {
    path: 'session',
    component: SessionComponent,
  },
];
// children: [
//   {
//     path: '',
//     loadChildren: () =>
//       import('./pages/pages.module').then((m) => m.PagesModule),
//   },
// ],  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PockerPlannerRoutingModule { }
