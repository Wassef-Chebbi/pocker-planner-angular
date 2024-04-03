import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Front/home/home.component';
import { ReclamationComponent } from './Front/reclamation/reclamation.component';
import { HeaderComponent } from './Front/header/header.component';
import { FrontComponent } from './Front/front/front.component';
import { BackComponent } from './Back/back/back.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { SignInDashboardComponent } from './dashboard/sign-in-dashboard/sign-in-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './sidebar/sidebar.component';
import { EditSessionComponent } from './dashboard/editsession/editsession.component';
import { ListSessionComponent } from './dashboard/list-session/list-session.component';
import { PockerPlannerModule } from './pocker-planner/pocker-planner.module';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReclamationComponent,
    HeaderComponent,
    FrontComponent,
    BackComponent,
    SignInComponent,
    RegisterComponent,
    SignInDashboardComponent,


    SidebarComponent,
    EditSessionComponent,
    ListSessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    PockerPlannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
