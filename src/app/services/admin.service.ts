import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private httpClient: HttpClient) { }

  getFlightsPendingApproval(){

    return this.httpClient.get('http://localhost:3000/pending-ticket');
  }

  addFlight(flightDetails){

    return this.httpClient.post('http://localhost:3000/add-flight',flightDetails);
  }

  approveTicket(ticketToApprove){
    return this.httpClient.post('http://localhost:3000/approve-ticket',ticketToApprove);
    
  }

  declineTicket(ticketToDecline){
    return this.httpClient.post('http://localhost:3000/decline-ticket',ticketToDecline);
  }
}
