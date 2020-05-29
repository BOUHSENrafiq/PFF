import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  // access to the DOM element we have created with ViewChild
  // 'mapContainer' is the name of the HTMLDivElement
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  // create a map variable
  map: google.maps.Map;
  lat = 30.408264;
  lng = -9.549937;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  // map options
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 15
  };
  // variable marker to add marker on the map
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });
  ngAfterViewInit() {
    this.mapInitializer();
  }

  /**
   * initialize the map
   */
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }
}
