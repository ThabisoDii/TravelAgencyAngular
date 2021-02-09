import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clear-session',
  templateUrl: './clear-session.component.html',
  styleUrls: ['./clear-session.component.css']
})
export class ClearSessionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.signOut();
  }

  signOut(){
    // localStorage.removeItem("userOnline")
     localStorage.clear()
     this.router.navigate(['/', 'signin']);
   }

}
