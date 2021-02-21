import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router,NavigationExtras } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from 'app/services/booking.service';
import { ConfirmationDialogService } from 'app/services/confirmationdialog.service';
import { EventEmitter } from 'events';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']

  
})
export class SearchFlightsComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  flights: any = [];
  animal: string;
  dialogData: string;

  flight : any;

  searchFlightForm : FormGroup;
 
  constructor(private bookingService: BookingService,private router: Router,private activeModal: NgbActiveModal,private confirmationDialogService: ConfirmationDialogService) { }

   navigationExtras: NavigationExtras = {};

  ngOnInit(): void {
    this.searchFlightForm = new FormGroup({
      departure_airport : new FormControl(),
      arrival_airport : new FormControl(),
      departure_date : new FormControl(),
      arrival_date : new FormControl()

    })
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

public openConfirmationDialog(flight:any) {
  this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to book this flight ?')
  .then((confirmed) => console.log('User confirmed:'+flight.departure_airport, confirmed))
  .catch();
}



}
