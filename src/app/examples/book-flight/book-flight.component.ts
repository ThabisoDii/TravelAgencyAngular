import { Component, OnInit } from '@angular/core';
import { BookingService } from 'app/services/booking.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  closeDatepicker(id){
    id.close();
  }


  searchFlights(form){

    const formData = {email : form.value.email,name : form.value.name,surname : form.value.surname,userType : "standard",passwordd : form.value.password}

        this.bookingService.searchFlights(formData).subscribe(data => {
           // this.isRegistered = true;
            console.log(data)
            
        });

  }

}
