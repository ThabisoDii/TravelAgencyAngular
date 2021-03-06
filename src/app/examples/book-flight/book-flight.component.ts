import { Component, OnInit } from '@angular/core';
import { BookingService } from 'app/services/booking.service';
import { DatePipe } from '@angular/common'
import * as moment from 'moment';
import {Flight} from "../../models/Flight"

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  constructor(private bookingService: BookingService,public datepipe: DatePipe) { }

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
