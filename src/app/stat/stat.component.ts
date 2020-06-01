import { Component, OnInit } from '@angular/core';
import {StatService} from '../services/stat.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  country: any;
  confirmed: number;
  recovered: number;
  deaths: number;
  constructor(private statService: StatService) { }
  ngOnInit(): void {
    // get to day statistics.
    this.statService.getToDayStat().subscribe(data => {
      console.log(data);
      const index = data.length - 1;
      this.country = data[index].Country;
      this.confirmed = data[index].Confirmed;
      this.recovered = data[index].Recovered;
      this.deaths = data[index].Deaths;
    });
  }
}
