import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OverviewComponent } from './components/overview/overview.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyprojectsComponent } from './components/myprojects/myprojects.component';
import { ProjectComponent } from './components/project/project.component';
import { AddMemberPopupComponent } from './components/add-member-popup/add-member-popup.component';
import { AddBugPopupComponent } from './components/add-bug-popup/add-bug-popup.component';
import {UserFilterPipe} from './pipes/user-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    OverviewComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    MyprojectsComponent,
    ProjectComponent,
    AddMemberPopupComponent,
    AddBugPopupComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
