import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
  open: boolean
}

@Component({
  selector: 'app-flights-view',
  templateUrl: './flights-view.component.html',
  styleUrls: ['./flights-view.component.css']
})
export class FlightsViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
      open: false
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
      open: false
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
      open: false
    }
  ];

}
