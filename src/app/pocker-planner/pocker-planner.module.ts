import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSessionComponent } from './create-session/create-session.component';

import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PockerPlannerRoutingModule } from './pocker-planner-routing.module';
import { JoinSessionComponent } from './join-session/join-session.component';
import { SessionComponent } from './session/session.component';
import { PockerPlannerComponent } from './pocker-planner.component';
import { SessionListComponent } from './session-list/session-list.component';
import { RouterModule } from '@angular/router';
import { VoteComponent } from './vote/vote.component';




@NgModule({
  declarations: [
    CreateSessionComponent,
    JoinSessionComponent,
    SessionComponent,
    PockerPlannerComponent,
    SessionListComponent,
    VoteComponent

  ],
  imports: [
    CommonModule,
    PockerPlannerRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule
  ]
})
export class PockerPlannerModule { }
