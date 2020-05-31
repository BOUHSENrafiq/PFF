import {Component, OnInit} from '@angular/core';
import {MarkerService} from '../services/marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
})
export class MapComponent implements OnInit{
  lat1 = 30.508264;
  lng1 = -9.649937;
  zoom = 18;
  lat = '';
  lng = '';
  marker: object;
  constructor(
    private markerService: MarkerService) { }

  ngOnInit(): void {
    this.markerService.getMarker().subscribe(data => {
      console.log(data);
      this.marker = data;
      this.lng = data.lng;
      this.lat = data.lat;
    });
  }
}

