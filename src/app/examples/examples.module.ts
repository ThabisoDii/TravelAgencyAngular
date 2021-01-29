import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { FlightsViewComponent } from './flights-view/flights-view.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { FlightsViewTileComponent } from './flights-view-tile/flights-view-tile.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        BrowserAnimationsModule,
        MatListModule,
        MatIconModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        SigninComponent,
        BookFlightComponent,
        FlightsViewComponent,
        SearchFlightsComponent,
        FlightsViewTileComponent
    ]
})
export class ExamplesModule { }
