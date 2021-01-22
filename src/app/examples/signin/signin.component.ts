import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt'

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

  ngOnInit() {}

  signinUser(form){

      const formData = {email : form.value.email,passwordd : form.value.password}

      this.authService.signinUser(formData).subscribe(data => {
        this.isLoggedIn = true;
          this.userOnline = data
          if(this.isLoggedIn){
            const decoded = this.helper.decodeToken(this.userOnline)//
            console.log(decoded);
            //localStorage.setItem("token",this.isLoggedIn)
            localStorage.setItem("userOnline",this.userOnline)// if its not null then show lohout
            this.router.navigate(['/', 'book-flight']);
          }
          
      });

  }

}
