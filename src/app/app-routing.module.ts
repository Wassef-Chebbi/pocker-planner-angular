import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Front/home/home.component';
import { ReclamationComponent } from './Front/reclamation/reclamation.component';
import { HeaderComponent } from './Front/header/header.component';
import { FrontComponent } from './Front/front/front.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { SignInDashboardComponent } from './dashboard/sign-in-dashboard/sign-in-dashboard.component';
import { HomeDashComponent } from './dashboard/home-dash/home-dash.component';






import { CreateSessionComponent } from './pocker-planner/create-session/create-session.component';
import { JoinSessionComponent } from './pocker-planner/join-session/join-session.component';
import { SessionComponent } from './pocker-planner/session/session.component';
import { PockerPlannerComponent } from './pocker-planner/pocker-planner.component';
import { SessionListComponent } from './pocker-planner/session-list/session-list.component';
import { PockerPlannerModule } from './pocker-planner/pocker-planner.module';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent
  },
  { path: 'reclamation', component: ReclamationComponent },/////////
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sign-in-dashboard', component: SignInDashboardComponent },
  { path: 'dashboard', component: HomeDashComponent },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
