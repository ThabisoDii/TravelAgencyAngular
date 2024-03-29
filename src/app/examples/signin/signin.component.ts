import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt'
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  helper = new JwtHelperService();
  isLoggedIn:boolean; 
  userOnline:any;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {

    
  }

  signinUser(form){

      const formData = {email : form.value.email,passwordd : form.value.password}

      this.authService.signinUser(formData).subscribe(data => {
        this.isLoggedIn = true;
          this.userOnline = data
          if(this.isLoggedIn){
            const decoded = this.helper.decodeToken(this.userOnline)//
            console.log(decoded);
            localStorage.setItem("userOnline",this.userOnline);// if its not null then show logout
            localStorage.setItem("userType",decoded.userDetails.userType);

           
              if(localStorage.getItem("userType") === "admin"){
                this.router.navigate(['/', 'admin-profile']);
              }else{
                //route to standard user
                this.router.navigate(['/', 'user-profile']);
              }
            
          }
          
      });

  }

}
