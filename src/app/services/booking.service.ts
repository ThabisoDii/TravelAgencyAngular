import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  searchFlights(flightDetails){

    console.log(flightDetails)
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json')
    return this.httpClient.post('http://localhost:3000/book-flight',flightDetails,{headers : httpHeaders})
  }
}
