import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class WeatherService {
    constructor(private http: Http) {}
    cityName = '';
    getWeather(cityName) {
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
        return this.http.get(url + cityName)
         .toPromise()
         .then( res => res.json())
         .then(resJSON => resJSON.main.temp);
    }

    getLocalhost3000() {
        const url = 'http://localhost:3000/';
        return this.http.get(url)
         .toPromise()
         .then( res => res.json())
         .then(resJSON => resJSON.name);
    }
}
