import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import User from '../models/user';
import {UserService} from '../services/user.service';
import { faWalking} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  user: User[];
  constructor(private userService: UserService) {}
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 30.408264;
  lng = -9.559967;
  markers = [
    {
      position: new google.maps.LatLng(30.408264, -9.559937),
      map: this.map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      title: 'case'
    },
    {
      position: new google.maps.LatLng(30.408264, -9.558937),
      map: this.map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      title: 'case'
    }
  ];

  // Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  // map options
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 17
  };
  image = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
  // Default Marker: your position
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    icon: this.image,
    title: 'You are here'
  });

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  /**
   * initialize the map
   */
  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    // Adding Click event to default marker
    this.marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    // Adding default marker to map
    this.marker.setMap(this.map);

    // Adding other markers
    this.loadAllMarkers();
  }

  /**
   * load all the markers
   */
  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      // Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      // creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      // Add click event to open info window on marker
      marker.addListener('click', () => {
        infoWindow.open(marker.getMap(), marker);
      });

      // Adding marker to google map
      marker.setMap(this.map);
    });
  }
}

