import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AdminService } from 'app/services/admin.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    helper = new JwtHelperService();
    fullName:any;
    flights: any;
    
    constructor(private adminService: AdminService,private router: Router,public dialog: MatDialog) { }

    ngOnInit() {
        this.getFlightsPendingApproval()
        this.fullName = this.getUserDetails().userDetails.name + ' '+this.getUserDetails().userDetails.surname;
    }

 
    getFlightsPendingApproval(){

        this.adminService.getFlightsPendingApproval().subscribe(data => {
            this.flights = data;
            console.log(this.flights)  
        });
  
    }

    addFlight(form){

        var departure_date  = this.formatDate(form.value.departure_date);
        var arrival_date  = this.formatDate(form.value.arrival_date);

        var isHotelIncluded = false;

        if(form.value.isHotelIncluded === "Yes"){
            isHotelIncluded = true;
        }

        const formData = {departure_airport : form.value.departure_airport,arrival_airport : form.value.arrival_airport,departure_date : departure_date,arrival_date : arrival_date,departure_time : "15:00",arrival_time : "17:00",isHotelIncluded}

        this.adminService.addFlight(formData).subscribe(data => {
        });
  
    }

    approveTicket(ticketId:string){

        const ticketToApprove = {ticketId: ticketId}

        this.adminService.approveTicket(ticketToApprove).subscribe(data => {
            this.getFlightsPendingApproval()
        });

    }

    declineTicket(ticketId:string){

        const ticketToDecline = {ticketId: ticketId}

        this.adminService.declineTicket(ticketToDecline).subscribe(data => {
            this.getFlightsPendingApproval()
        });
        
    }

    getUserDetails(){
        const decoded = this.helper.decodeToken(localStorage.getItem("userOnline"));

        return decoded;
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
