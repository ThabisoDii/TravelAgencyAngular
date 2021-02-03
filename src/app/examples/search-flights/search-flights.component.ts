import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { BookingService } from 'app/services/booking.service';
import { EventEmitter } from 'events';



@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']

  
})
export class SearchFlightsComponent implements OnInit {

  flights: any = [];
 
  constructor(private bookingService: BookingService,public datepipe: DatePipe,private router: Router) { }

   navigationExtras: NavigationExtras = {};

  ngOnInit(): void {
  }

  closeDatepicker(id){
    id.close();
  }


  searchFlights(form){

    var departure_date  = this.formatDate(form.value.departure_date);
    var arrival_date  = this.formatDate(form.value.arrival_date);

    const formData = {departure_airport : form.value.departure_airport,arrival_airport : form.value.arrival_airport,departure_date : departure_date,arrival_date : arrival_date}

    this.bookingService.searchFlights(formData).subscribe(data => {
      
       console.log(data) 
       this.flights= data;
      
    });
   
  }

   formatDate(date) {
    
        var month = '' + date.month;
        var day = '' + date.day;
        var year = date.year;

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

}
