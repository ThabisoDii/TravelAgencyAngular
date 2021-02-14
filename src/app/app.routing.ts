import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { SigninComponent } from './examples/signin/signin.component';
import { BookFlightComponent } from './examples/book-flight/book-flight.component';
import { SearchFlightsComponent } from './examples/search-flights/search-flights.component';
import { AuthGuard } from './auth.guard';
import { StandardProfileComponent } from './examples/standard-profile/standard-profile.component';
import { ClearSessionComponent } from './shared/clear-session/clear-session.component';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'landing',           component: LandingComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'signin',           component: SigninComponent },
    {path: 'search-flight',           component: SearchFlightsComponent },
    { path: 'book-flight',           component: BookFlightComponent,canActivate : [AuthGuard]},
    { path: 'admin-profile',     component: ProfileComponent,canActivate : [AuthGuard]},
    { path: 'user-profile',     component: StandardProfileComponent },
    { path: 'log-out',     component: ClearSessionComponent,canActivate : [AuthGuard] },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
