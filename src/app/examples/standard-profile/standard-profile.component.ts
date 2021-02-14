import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AdminService } from 'app/services/admin.service';
import { BookingService } from 'app/services/booking.service';
import { DialogComponent } from '../dialog/dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-standard-profile',
  templateUrl: './standard-profile.component.html',
  styleUrls: ['./standard-profile.component.css']
})


export class StandardProfileComponent implements OnInit {

  helper = new JwtHelperService();
  fullName:any;
  animal: string;
  name: string;

    approvedFlights: any;
    pendingFlights: any;
    constructor(private adminService: BookingService,private router: Router,public dialog: MatDialog) { }

    ngOnInit() {

        this.getUserApprovedTickets()
        this.getUserApprovalPendingTickets();
        this.fullName = this.getUserDetails().userDetails.name + ' '+this.getUserDetails().userDetails.surname;

        
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        data: {name: this.name, animal: this.animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }

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

  getUserDetails(){
    const decoded = this.helper.decodeToken(localStorage.getItem("userOnline"));

    return decoded;
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
