import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    isStandardUser :boolean; 
    isAdminUser :boolean; 

    user:any ={
        name : "Thabiso",
        surname : "Diphare"
    }
    
    constructor() { }

    ngOnInit() {

        this.isStandardUser =  false;
        this.isAdminUser = true;
    }

}
