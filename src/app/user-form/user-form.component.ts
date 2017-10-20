import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  name = '';
  evenStyle = {color: 'red', fontSize: '40px'};
  oddStyle = {color: 'black', fontSize: '30px'};

  constructor() { }

  ngOnInit() {
  }

  showName(bien_bat_ky) {
    this.name = bien_bat_ky.target.value;
  }
}
