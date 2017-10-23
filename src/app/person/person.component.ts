//B1: Khi muon truyen tham so trong component thi them Input trong phan import
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

//B2: sau do trong phan export thi them @Input() bien: kieu_bien 
export class PersonComponent implements OnInit {

  @Input() name: String;
  @Input() age: Number;
  
  constructor() { }

  ngOnInit() {
  }

}
