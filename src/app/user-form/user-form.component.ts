import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  name = '';

  constructor() { }

  ngOnInit() {
  }

  showName(bien_bat_ky) {
    this.name = bien_bat_ky.target.value;
  }
}
