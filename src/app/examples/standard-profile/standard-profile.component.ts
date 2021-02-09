import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'app/services/admin.service';
import { BookingService } from 'app/services/booking.service';

@Component({
  selector: 'app-standard-profile',
  templateUrl: './standard-profile.component.html',
  styleUrls: ['./standard-profile.component.css']
})
export class StandardProfileComponent implements OnInit {

  isStandardUser :boolean; 
    isAdminUser :boolean; 

    user:any ={
        name : "Thabiso",
        surname : "Diphare"
    }

    approvedFlights: any;
    pendingFlights: any;
    constructor(private adminService: BookingService,private router: Router) { }

    ngOnInit() {

        this.getUserApprovedTickets()
        this.getUserApprovalPendingTickets();
        
    }

    /*flight: any[] = [
        {
          departure_date: '10-01-2016',
          arrival_date: '10-01-2016',
          departure_airport: 'OR Tambo Int.Airport',
          arrival_airport: 'King Shaka Int.Airport',
        },
        {
          departure_date: '10-01-2016',
          arrival_date: '10-01-2016',
          departure_airport: 'OR Tambo Int.Airport',
          arrival_airport: 'King Shaka Int.Airport',
        },
        {
          departure_date: '10-01-2016',
          arrival_date: '10-01-2016',
          departure_airport: 'OR Tambo Int.Airport',
          arrival_airport: 'King Shaka Int.Airport',
        }
      ];*/

      getUserApprovedTickets(){

        this.adminService.getUserApprovedTickets().subscribe(data => {
            this.approvedFlights = data;
        });
  
    }


    getUserApprovalPendingTickets(){

      this.adminService.getUserApprovalPendingTickets().subscribe(data => {
          this.pendingFlights = data;
      });

  }

   /* addFlight(form){

        var departure_date  = this.formatDate(form.value.departure_date);
        var arrival_date  = this.formatDate(form.value.arrival_date);

        const formData = {departure_airport : form.value.departure_airport,arrival_airport : form.value.arrival_airport,departure_date : departure_date,arrival_date : arrival_date,departure_time : "14:00",arrival_time : "14:00"}

        this.adminService.addFlight(formData).subscribe(data => {
        }); 
  
    }*/

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
