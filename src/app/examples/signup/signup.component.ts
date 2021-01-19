import { Component, OnInit } from '@angular/core';
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

    isRegistered:boolean; 
    constructor(private registrationService: RegistrationService) { }

    ngOnInit() {}

    registerUser(form){

        const formData = {email : form.value.email,name : form.value.name,surname : form.value.surname,userType : "standard",passwordd : form.value.password}

        this.registrationService.registerUser(formData).subscribe(data => {
            this.isRegistered = true;
            console.log(data)
            
        });

    }
}
