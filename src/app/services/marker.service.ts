/**
 * By BOUHSEN RAFIQ
 * project: PFF TrackCovid19
 * User service.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Marker} from '../models/marker';

const url = 'http://localhost:3000/marker'; // json-server url
@Injectable({
  providedIn: 'root'
})
/**
 * injectable user service
 * @class [export UserService]
 */
export class MarkerService {

  constructor(private http: HttpClient) { }

  /**
   * @method {getListOfUsers}
   */
  getMarker() {
    return this.http.get<Marker>(url);
  }
  /**
   * get latitude from database
   * @method {getLat}
   */
  getLat(): Observable<Marker['lat']>{
    return this.http.get<Marker['lat']>(url);
  }
}

