import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
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

    registerForm: FormGroup;
    submitted = false;

    isNotRegistered:boolean; 
    constructor(private registrationService: RegistrationService,private router: Router,private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    registerUser(form){

        this.submitted = true;

        
           
        
            const formData = {email : form.value.email,name : form.value.name,surname : form.value.surname,userType : "standard",passwordd : form.value.password}

            this.registrationService.registerUser(formData).subscribe(data => {
    
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(""))
                this.router.navigate(['/', 'signin']);
    
                //route to signin
                
            },(error)=>{
                //pop that you can't log in
                this.isNotRegistered = true;
            });
        

        



    }

    get f()
    { return this.registerForm.controls; }
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