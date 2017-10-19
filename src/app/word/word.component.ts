import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent  {
  inter= 'Data binding: String interpolation: ';
  en = 'Hello';
  vn = 'xin chao';
  imgUrl = 'https://angular.io/generated/images/guide/architecture/databinding.png';  
  
  propVal = `Data binding: [property] = 'value':`;
  imgUrl2 = 'https://angular.io/generated/images/guide/architecture/component-databinding.png';
  
  event_handler = `(event) = 'handler'`;
  show_hide = false;

  funcShowHide() {
    this.show_hide = !this.show_hide;
  }
}
