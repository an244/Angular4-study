import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {name: 'Teo', age: 10},
    {name: 'Ti', age: 101},
    {name: 'Tun', age: 102},
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
