import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn:boolean; 
  constructor(private authService: AuthService) { }

  ngOnInit() {}

  signinUser(form){

      const formData = {email : form.value.email,passwordd : form.value.password}

      this.authService.signinUser(formData).subscribe(data => {
          this.isLoggedIn = true;
          console.log(data)
          
      });

  }

}
