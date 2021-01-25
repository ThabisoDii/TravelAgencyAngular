import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { FlightsViewComponent } from './flights-view/flights-view.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        SigninComponent,
        BookFlightComponent,
        FlightsViewComponent,
        SearchFlightsComponent
    ]
})
export class ExamplesModule { }
