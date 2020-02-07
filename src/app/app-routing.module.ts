import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {OverviewComponent} from './components/overview/overview.component';

/**
 * Defines all the routes in the application
 */
const routes: Routes = [
  {path: '', redirectTo: 'overview', pathMatch: 'full'},
  {
    path: 'overview', component: OverviewComponent
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
