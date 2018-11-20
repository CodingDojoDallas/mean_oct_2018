import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {};

  getWeather(cityname) {
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=03d602ee2f6a720b8487d696b392c167`);
  };


}
