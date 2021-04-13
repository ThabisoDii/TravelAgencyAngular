import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class BookingService {


  constructor(private httpClient: HttpClient) { }

  searchFlights(flightDetails){

    
    const httpHeaders = new HttpHeaders();
    
    return this.httpClient.post('http://localhost:3000/search/flights',flightDetails)
  }

  getUserApprovedTickets(){

    
    const httpHeaders = new HttpHeaders();
    
    return this.httpClient.get('http://localhost:3000/user-approved-tickets')
  }

  bookTickets(ticket){

    
    const httpHeaders = new HttpHeaders();
    
    return this.httpClient.post('http://localhost:3000/book-flight',ticket)
  }

  getUserApprovalPendingTickets(){

    
    const httpHeaders = new HttpHeaders();
    
    return this.httpClient.get('http://localhost:3000/user-pending-tickets')
  }
}
