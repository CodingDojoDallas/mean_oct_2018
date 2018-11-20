import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';

@Component({
  selector: 'app-washington-dc',
  templateUrl: './washington-dc.component.html',
  styleUrls: ['./washington-dc.component.css']
})
export class WashingtonDcComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { };

  ngOnInit() {
     this.city = { name: "" };
     this.getCityWeather();
   }

   getCityWeather() {
  let observable = this._httpService.getWeather("Washington,US");
  observable.subscribe(data => {
    console.log("Got a city weather!", data)
    this.city = data;
  });
};

}
