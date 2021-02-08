import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegistrationService} from '../../services/registration.service'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;

    isNotRegistered:boolean; 
    constructor(private registrationService: RegistrationService,private router: Router) { }

    ngOnInit() {}

    registerUser(form){

        const formData = {email : form.value.email,name : form.value.name,surname : form.value.surname,userType : "standard",passwordd : form.value.password}

        this.registrationService.registerUser(formData).subscribe(data => {
            
        },(error)=>{
            //pop that you can't log in
            this.isNotRegistered = true;
        });

    }
}

/** 
 * 
 * 
 * Login(user: User) {
    return this.http.post(apiUrl + 'account/Login', user).subscribe(
        (data) => {

        },
        (error) => {
           console.log(error);
           // get the status as error.status
        })
}
*/