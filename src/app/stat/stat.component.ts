import { Component, OnInit } from '@angular/core';
import {StatService} from '../services/stat.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  Country: any;
  ToDayCases: number;
  Confirmed: number;
  Recovered: number;
  Deaths: number;
  constructor(private statService: StatService) { }
  ngOnInit(): void {
    // get to day statistics.
    this.statService.getToDayStat().subscribe(data => {
      console.log(data);
      this.Country = data.country;
      this.ToDayCases = data.todayCases;
      this.Confirmed = data.cases;
      this.Recovered = data.recovered;
      this.Deaths = data.deaths;
    });
  }
}
