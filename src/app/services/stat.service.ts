import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http: HttpClient) { }
  /**
   * get today statistics
   */
  getToDayStat(): Observable<any>{
    const url = 'https://api.covid19api.com/total/dayone/country/morocco'; // API
    return this.http.get<any>(url);
  }
}
