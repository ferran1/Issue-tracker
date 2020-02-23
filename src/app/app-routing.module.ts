import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {OverviewComponent} from './components/overview/overview.component';
import {LoginComponent} from './components/login/login.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {MyprojectsComponent} from './components/myprojects/myprojects.component';
import {ProjectComponent} from './components/project/project.component';

/**
 * Defines all the routes of the application
 */
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'overview', component: OverviewComponent
  },
  {
    path: 'myprojects', component: MyprojectsComponent,
    // children: [{
    //   path: 'project',
    //   component: ProjectComponent
    // }],
  },
  {
    path: 'project/:id', component: ProjectComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
