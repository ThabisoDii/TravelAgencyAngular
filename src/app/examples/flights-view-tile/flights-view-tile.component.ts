import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-view-tile',
  templateUrl: './flights-view-tile.component.html',
  styleUrls: ['./flights-view-tile.component.css']
})
export class FlightsViewTileComponent implements OnInit {

  @Input() flights : any;

  constructor() { }

  ngOnInit(): void {
  }

}
