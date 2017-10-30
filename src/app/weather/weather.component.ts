import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent {
  cityName = '';
  txtCityName = '';
  temperature = '';

  constructor(private weatherServe: WeatherService) { }
  onGetWeather() {
    this.weatherServe.getWeather(this.txtCityName)
      .then(res => this.temperature = res)
      .catch(err => console.log(err));
  }
}
