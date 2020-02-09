import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {OverviewComponent} from './components/overview/overview.component';
import {LoginComponent} from './components/login/login.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';

/**
 * Defines all the routes of the application
 */
const routes: Routes = [
  {path: '', redirectTo: 'overview', pathMatch: 'full'},
  {
    path: 'overview', component: OverviewComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
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
