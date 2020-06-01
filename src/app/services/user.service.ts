/**
 * By BOUHSEN RAFIQ
 * project: PFF TrackCovid19
 * User service.
 */
import { Injectable } from '@angular/core';
import User from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/user'; // json-server url
@Injectable({
  providedIn: 'root'
})
/**
 * injectable user service
 * @class [export UserService]
 */
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * @method {getListOfUsers}
   */
  getListOfUsers(): Observable<User[]>{
    return this.http.get<User[]>(url);
  }
  /**
   * get latitude from database
   * @method {getLat}
   */
  getLat(): Observable<User['lat']>{
    return this.http.get<User['lat']>(url);
  }
}

