import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { };

  ngOnInit() {
     this.city = { name: "" };
     this.getCityWeather();
   }

   getCityWeather() {
  let observable = this._httpService.getWeather("Burbank,US");
  observable.subscribe(data => {
    console.log("Got a city weather!", data)
    this.city = data;
  });
};

}
