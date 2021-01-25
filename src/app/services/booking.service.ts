import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  searchFlights(flightDetails){

    
    const httpHeaders = new HttpHeaders();
    
    return this.httpClient.post('http://localhost:3000/search/flights',flightDetails)
  }
}
