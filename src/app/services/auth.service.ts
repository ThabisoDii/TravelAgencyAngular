import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();


  constructor(private httpClient: HttpClient) { }

  signinUser(userLoginCredentials){

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json')
    return this.httpClient.post('http://localhost:3000/login',userLoginCredentials,{headers : httpHeaders})
  }

  
   
}
